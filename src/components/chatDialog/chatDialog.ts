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
	private socket: WebSocket | undefined;

	constructor(props: any) {
		super(props);
		this.chatController = new ChatController();
		this.authController = new AuthController();
		this.store = new Store();
		this.store.on(StoreEvents.Updated, () => {
			this.chatId = this.store.getState().selectedChat as string;
			console.log(this.store);
			this.setProps(this.store.getState());
			this.connect();
		});
	}

	async connect() {
		const token = await this.chatController.getChatToken(this.chatId);
		const userId = await this.authController.getUser();
		console.log(this.chatId);


		const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId.id}/${this.chatId}/${token.token}`);
		socket.addEventListener('open', () => {
			console.log('Соединение установлено');
		});
		this.socket = socket;
	}

	protected render(): string {

		//language=hbs
		return `
            <div class="chat-dialog">
                <p>тут будут сообщения людей</p>
            </div>
		`;
	}
}