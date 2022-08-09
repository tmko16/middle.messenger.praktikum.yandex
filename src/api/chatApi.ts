import HTTPTransport from '../core/HTTPTransport';
import Store, {StoreEvents} from '../core/Store';
import {BASE_URL} from '../enums';

class ChatApi {
	private api: HTTPTransport;
	private store: Store;
	constructor() {
		this.api = new HTTPTransport(BASE_URL);
		this.store = new Store();
	}

	async getChats() {
		const response = await this.api.get('/chats', {  headers: {'Content-Type': 'application/json'}});
		this.store.set('user.chats', JSON.parse(response.response));
		this.store.emit(StoreEvents.Updated);
	}
}

export default ChatApi;