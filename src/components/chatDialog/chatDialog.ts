import Block from '../../core/Block';
import './chatDialog.less';
import Store, {StoreEvents} from '../../core/Store';
import store from '../../core/Store';
export class ChatDialog extends Block {
	private store: Store;
	private chatId = '';
	constructor(props:any) {
		super(props);
		console.log(this.chatId, 'this.chatId');
		this.store = new Store();
		this.store.on(StoreEvents.Updated, () => {
			this.chatId = this.store.getState().selectedChat as string;
			console.log(this.store);
			this.setProps(this.store.getState());
		});
	}


	protected render(): string {
		console.log('рендер метода');
		//language=hbs
		return `
			<div class="chat-dialog">
				<p>тут будут сообщения людей</p>
			</div>
		`;
	}
}