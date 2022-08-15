import Block from '../../core/Block';
import Store from '../../core/Store';
import mController from './modalController';
import './modal.less';
import Button from '../button';


class Modal extends Block {
	private store: Store;

	constructor(props: { block: any, context: Record<string, unknown> }) {

		const modalContent = new props.block(props.context);
		const closeBtn = new Button({text: 'Закрыть ❌'});
		super({closeBtn, modalContent});
		this.store = new Store();
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="modal">

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