import Block from '../../core/Block';
import './addChat.less';
import FormInput from '../formInput';
import Store, {StoreEvents} from '../../core/Store';
import Button from '../button';
import ChatController from '../../controllers/chatController';

export class AddChat extends Block {
	private store: Store;
	private chatName = '';
	private chatUserName = '';
	private chatController: ChatController;

	constructor(props: any) {
		super({
			...props
		});
		this.chatController = new ChatController();
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
				this.addChatAndUser();
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

	addChatAndUser() {
		this.chatController.addChatAndUser(this.chatName, this.chatUserName).then(res => {
			console.log(res);
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


