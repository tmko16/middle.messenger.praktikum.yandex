import Block from '../core/Block';

function isEqual(lhs: string, rhs: string) {
	return lhs === rhs;
}

function render(query: string, block: Block) {
	const root = document.querySelector(query);
	root!.append(block.getContent());
	return root;
}

class Route<P = any> {
	private _pathName: string;
	private _blockClass: any;
	private _block: Block | null;
	private _props: P;

	constructor(pathName: string, view: any, props: P) {
		this._pathName = pathName;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	navigate(pathName: string) {
		if (this.match(pathName)) {
			this._pathName = pathName;
			this.render();
		}
	}

	leave() {
		if (this._block) {
			this._block.hide();
		}
	}

	match(pathName: string) {
		return isEqual(pathName, this._pathName);
	}

	render() {
		if (!this._block) {
			this._block = new this._blockClass();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			render(this._props.rootQuery, this._block);
			return;
		}
		this._block.show();
	}
}

export class Router {
	private routes: any[] = [];
	private history: History | undefined;
	private _currentRoute: Route | null = null;
	private static _instance: Router;
	private _rootQuery: string | undefined;

	constructor() {
		if (Router._instance) {
			return Router._instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = '#app';

		Router._instance = this;
	}

	use(pathName: string, block: Block) {
		const route = new Route(pathName, block, {rootQuery: this._rootQuery});
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.routes.push(route);
		return this;
	}

	start() {
		window.onpopstate = event => {
			alert('eikb ');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			this._onRoute(event.currentTarget.location.pathname);
		};

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathName: string) {
		const route = this.getRoute(pathName);
		if (!route) {
			return;
		}
		if (this._currentRoute) {
			this._currentRoute.leave();
		}

		route.render(route, pathName);
	}

	go(pathName: string) {
		this.history!.pushState({}, '', pathName);
		this._onRoute(pathName);
	}

	getRoute(pathName: string) {
		return this.routes.find(route => route.match(pathName));
	}


}