import Block from '../../core/Block';
import Store from '../../core/Store';
import './modal.less';
import Button from '../button';
import ModalController from './modalController';


class Modal extends Block {
	private store: Store;
	modalElement: Element | null | undefined = null;

	constructor(props: { block: any, context: Record<string, unknown> }) {
		const modalContent = new props.block(props.context);
		super({ modalContent});
		const closeBtn = new Button({text: 'Закрыть', onSubmit: () => this.closeBtn()});
		this.store = new Store();
		this.setChildren({closeBtn});
		this.setProps({contentName: props.block.name});
	}

	componentDidMount() {
		this.modalElement = document.getElementById(this.props.contentName);
	}

	public closeBtn() {
		if (this.modalElement) {
			(this.modalElement as HTMLElement).style.display = 'none';
		}
	}
	public openModal() {
		if (this.modalElement) {
			(this.modalElement as HTMLElement).style.display = 'block';
		}
	}


	protected render(): string {
		//language=hbs
		return `
            <div class="modal" id="{{{contentName}}}">
                <div class="modal_content">
                    <div class="modal__close-btn">
                        {{{closeBtn}}}
                    </div>
                    {{{modalContent}}}
                </div>
            </div>
		`;
	}
}

export default Modal;