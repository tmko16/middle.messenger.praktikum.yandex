import Block from '../../core/Block';
import './addChat.less';
import FormInput from '../formInput';
import Store, {StoreEvents} from '../../core/Store';
import Button from '../button';

export class AddChat extends Block {
	private store: Store;
	private chatName = '';
	private chatUserName = '';

	constructor(props: any) {
		super({
			...props
		});
		this.store = new Store();
		this.store.on(StoreEvents.Updated, () => {
			this.setProps(this.store.getState());
		});
		const chatName = new FormInput({
			label: 'Название чата', name: 'chat_name', type: 'text', events: {
				keyup: (e: any) => {
					this.chatName = e.target.value;
				}
			}
		});
		const okBtn = new Button({
			text: 'Добавить', onSubmit: () => {
				console.log(this, 'это адд чат кнопки ОК');
			}
		});
		const searchUser = new FormInput({
			label: 'Имя пользователя', name: 'chat_user_name', type: 'text', events: {
				keyup: (e: any) => {
					this.chatUserName = e.target.value;
				}
			}
		});
		this.setChildren({
			chatName, okBtn, searchUser
		});
	}


	protected render(): string {
		//language=hbs
		return `
            <div class="add-chat">
                {{{chatName}}}
                {{{searchUser}}}
                {{{okBtn}}}
            </div>`;
	}

}


