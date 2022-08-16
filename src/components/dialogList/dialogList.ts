import Block from '../../core/Block';
import Dialog from '../dialog';
import chatController from '../../controllers/chatController';
import Link from '../link';
import Store, {StoreEvents} from '../../core/Store';
import store from '../../core/Store';

export class DialogList extends Block {
	private chatController: any;
	private store: Store;

	constructor() {
		super();
		this.store = new Store();
		this.chatController = new chatController();
		this.store.on(StoreEvents.Updated, () => {
			this.setProps(this.store.getState());
		});
	}

	async componentDidMount() {
		const res = await this.chatController.getChats();
		const dialogs = res.map((dialog: any) => {
			return new Dialog({
				...dialog, onClick: (e: any) => {
					this.store.set('selectedChat', e.currentTarget.dataset.chatId);
					this.store.emit(StoreEvents.Updated);
					this.clearChat.apply(this);
				}
			});
		});
		this.setChildren({dialogs});
	}

	clearChat() {
		const chatWindow = 	document.querySelector('[role="chat-window"]');
		if (chatWindow) chatWindow.innerHTML = '';
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="dialog-list">
                {{{dialogs}}}
            </div>
		`;
	}
}