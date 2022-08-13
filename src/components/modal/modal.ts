import Block from '../../core/Block';
import Store from '../../core/Store';
import mController from './modalController';
import './modal.less';
import Button from '../button';

class Modal extends Block {
	private store: Store;

	//TODO: удалить эни
	constructor(props: any) {

		const content = props &&  props.modalContent ? new props.modalContent() : '';
		const closeBtn = new Button({text: 'Закрыть ❌'});
		super({closeBtn, content});
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
<!--                     Тут контент-->
					{{{content}}}
                </div>
            </div>
		`;
	}
}

export default Modal;