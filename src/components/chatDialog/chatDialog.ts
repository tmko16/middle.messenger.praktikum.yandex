import Block from '../../core/Block';
import './chatDialog.less';
import Store, {StoreEvents} from '../../core/Store';
import store from '../../core/Store';
import ChatController from '../../controllers/chatController';
import {UserController} from '../../controllers/userController';
import AuthController from '../../controllers/authController';
import Msg from '../msg';
import {MsgProps} from '../msg/msg';

export class ChatDialog extends Block {
	private store: Store;
	private chatId = '';
	private chatController: ChatController;
	private authController: AuthController;
	private chats: Msg[] | undefined;

	constructor() {
		super();
		this.chatController = new ChatController();
		this.authController = new AuthController();
		this.store = new Store();

		this.store.on(StoreEvents.Updated, () => {
			this.chatId = this.store.getState().selectedChat as string;
			this.setProps(this.store);
			const stub = new Msg({content: '123', id: 0, time: '', type: '', user_id: 0, classes: 'stub'});
			const messagesRaw = this.store.getState().dialogMessages;
			let msgs;
			if (messagesRaw) {
				msgs = (messagesRaw as Array<MsgProps>).map((message: MsgProps) => {
					return new Msg(message);
				});
			} else {
				msgs = [stub];
			}
			this.setChildren({msgs});
			this.eventBus().emit(Block.EVENTS.FLOW_CDU);
		});
		this.setChildren(this.chats);
	}

	componentDidMount() {
		const ref = document.querySelector('[role="chat-window"]');
		this.store.set('refMsgWindow', ref);
	}

	protected render(): string {
		return `
            <div class="chat-dialog" role="chat-window">
            {{{msgs}}}
            </div>
		`;

	}
}