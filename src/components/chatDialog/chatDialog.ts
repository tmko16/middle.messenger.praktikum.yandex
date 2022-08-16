import Block from '../../core/Block';
import './chatDialog.less';
import Store, {StoreEvents} from '../../core/Store';
import store from '../../core/Store';
import ChatController from '../../controllers/chatController';
import {UserController} from '../../controllers/userController';
import AuthController from '../../controllers/authController';

export class ChatDialog extends Block {
	private store: Store;
	private chatId = '';
	private chatController: ChatController;
	private authController: AuthController;

	constructor() {
		super();
		this.chatController = new ChatController();
		this.authController = new AuthController();
		this.store = new Store();

		this.store.on(StoreEvents.Updated, () => {
			this.chatId = this.store.getState().selectedChat as string;
			this.setProps(this.store);
		});
	}

	componentDidMount() {
		const ref = document.querySelector('[role="chat-window"]');
		this.store.set('refMsgWindow', ref);

	}

	protected render(): string {

		//language=hbs
		return `
            <div class="chat-dialog" role="chat-window">
            </div>
		`;
	}
}