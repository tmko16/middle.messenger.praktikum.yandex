import Block from '../../core/Block';
import Store from '../../core/Store';
import mController from './modalController';
import './modal.less';
import Button from '../button';

class Modal extends Block {
	private store: Store;

	//TODO: удалить эни
	constructor(props: any) {
		const closeBtn = new Button({text: 'Закрыть ❌'});
		super({closeBtn});
		this.store = new Store();
	}

	protected render(): string {
		//language=hbs
		return `
            <div id="modal">
                <div class="modal__close-btn">
                    {{{closeBtn}}}
                </div>
                <div class="modal_content">
<!--                     Тут контент-->
                </div>
            </div>
		`;
	}
}

export default Modal;