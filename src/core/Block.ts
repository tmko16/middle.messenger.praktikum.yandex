import EventBus from './EventBus';
import {nanoid} from 'nanoid';
import Handlebars from 'handlebars';

interface BlockMeta<P = any> {
	props: P;
}


export default class Block<P = any> {
	static EVENTS = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	} as const;

	public id = nanoid(6);
	private readonly _meta: BlockMeta;

	protected _element: HTMLElement | null = null;
	protected readonly props: P;
	children: { [id: string]: Block } = {};

	eventBus: () => EventBus;

	protected state: Record<string, unknown> = {};
	protected refs: { [key: string]: HTMLElement } = {};
	public errors: string | undefined = '';

	public constructor(propsAndChildren?: P) {
		propsAndChildren = propsAndChildren ?? {} as P;
		const {children, props} = this._getChildren(propsAndChildren);
		this.children = children;
		const eventBus = new EventBus();
		this._meta = {
			props,
		};

		this.getStateFromProps(props);

		this.props = this._makePropsProxy(props || {} as P);
		this.state = this._makePropsProxy(this.state);
		this.children = this._makePropsProxy(this.children);

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);

		eventBus.emit(Block.EVENTS.INIT, this.props);
	}

	private _getChildren(propsAndChildren?: P) {
		const children: Record<string, any> = {};
		const props: Record<string, any> = {};

		Object.entries(propsAndChildren as P).forEach(([key, value]) => {
			if (value instanceof Block) {
				children[key] = value;
			} else {
				props[key] = value;
			}
		});

		return {children, props};
	}

	private _registerEvents(eventBus: EventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	private _createResources() {
		this._element = this._createDocumentElement('div');
	}

	protected getStateFromProps(props: any): void {
		this.state = {};
	}

	init() {
		this._createResources();
		this.eventBus().emit(Block.EVENTS.FLOW_RENDER, this.props);
	}

	private _componentDidMount(props: P) {
		this.componentDidMount(props);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	componentDidMount(props: P) {
	}

	private _componentDidUpdate(oldProps: P, newProps: P) {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	componentDidUpdate(oldProps: P, newProps: P) {
		return true;
	}

	protected setProps = (nextProps: P) => {
		if (!nextProps) {
			return;
		}
		Object.assign(this.props, nextProps);
	};

	protected setChildren = (child: P) => {
		if (!child) {
			return;
		}
		/**
		 * Мне нужно каким то образом сделать так, что бы если я передал детей именно массивом
		 * я смог контент этого массива запихнуть в родительский тег
		 */

		Object.assign(this.children, child);
	};

	setState = (nextState: P) => {
		if (!nextState) {
			return;
		}

		Object.assign(this.state, nextState);
	};

	get element() {
		return this._element;
	}

	private _render() {
		const fragment = this._compile();
		this._removeEvents();
		const newElement = fragment.firstElementChild!;
		if (this._element) {
			this._element.replaceWith(newElement);
			this._element = newElement as HTMLElement;
		}
		this._addEvents();
	}

	protected render(): string {
		return '';
	}

	getContent(): HTMLElement {
		// Хак, чтобы вызвать CDM только после добавления в DOM
		if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
			setTimeout(() => {
				if (this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
					this.eventBus().emit(Block.EVENTS.FLOW_CDM);
				}
			}, 100);
		}

		return this.element!;
	}

	private _makePropsProxy(props: any): any {
		// Можно и так передать this
		// Такой способ больше не применяется с приходом ES6+
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		const self = this;

		return new Proxy(props as unknown as object, {
			get(target: Record<string, unknown>, prop: string) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target: Record<string, unknown>, prop: string, value: unknown) {
				target[prop] = value;

				// Запускаем обновление компоненты
				// Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
				self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			},
		}) as unknown as P;
	}

	private _createDocumentElement(tagName: string) {
		return document.createElement(tagName);
	}

	private _removeEvents() {
		const events: Record<string, () => void> = (this.props as any).events;

		if (!events || !this._element) {
			return;
		}


		Object.entries(events).forEach(([event, listener]) => {
			this._element?.removeEventListener(event, listener);
		});
	}

	private _addEvents() {
		const events: Record<string, () => void> = (this.props as any).events;

		if (!events) {
			return;
		}

		Object.entries(events).forEach(([event, listener]) => {
			this._element!.addEventListener(event, listener, true);
		});
	}

	private _compile(): DocumentFragment {
		/**
		 * есть компонент диалог лист - он главный.
		 * мне надо сделать так - дать ему через детей массив дочек которые нужно склеить
		 * пройтись по этим детям и нафигачить для каждого свою заглушку.
		 */
		const propsAndStubs: Record<string, any> = {...this.props};
		Object.entries(this.children).forEach(([key, child]) => {
			propsAndStubs[key] = `<div data-id="${child.id}"></div>`;

			if (Array.isArray(child)) {
				const multiValues: string[] = [];
				Object.values(child).forEach((c) => {
					propsAndStubs[c.id] = c;
					multiValues.push(`<div data-id="${c.id}"></div>`);
				});
				if (multiValues.length) {
					propsAndStubs[key] = multiValues.join('');
				}
			}
		});
		const fragment = document.createElement('template');
		/**
		 * Рендерим шаблон
		 */
		const template = Handlebars.compile(this.render());
		fragment.innerHTML = template({
			...this.state, ...this.props,
			children: this.children,
			refs: this.refs, ...propsAndStubs
		});
		/**
		 * Заменяем заглушки на компоненты
		 */

		Object.entries(this.children).forEach(([id, component]) => {
			if (Array.isArray(component)) {
				component.forEach(c => {
					const stub = fragment.content.querySelector(`[data-id="${c.id}"]`);
					if (!stub) {
						return;
					}
					/**
					 * Заменяем заглушку на component._element
					 */
					const content = c.getContent();
					stub.replaceWith(content);
				});
			}
			/**
			 * Нужно сделать проверку - если компонент является массивом - то пройтись по каждому элементу
			 * массива и сделать все то что ниже.
			 */
			/**
			 * Ищем заглушку по id
			 */
			const stub = fragment.content.querySelector(`[data-id="${component.id}"]`);
			if (!stub) {
				return;
			}


			/**
			 * Заменяем заглушку на component._element
			 */
			const content = component.getContent();
			stub.replaceWith(content);


		});

		/**
		 * Возвращаем фрагмент
		 */
		return fragment.content;
	}


	show() {
		this.getContent().style.display = 'block';
	}

	hide() {
		this.getContent().style.display = 'none';
	}
}