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
		return this.api.get('/chats', {headers: {'Content-Type': 'application/json'}});
	}

	async createChat(chatTitle: string) {
		const res = await this.api.post('/chats', {
			headers: {'Content-Type': 'application/json'}, data: {
				'title': chatTitle
			}
		});
		if (res.status === 200) {
			return JSON.parse(res.response);
		}
	}

	async addUserToChat(userId: string, chatId: string) {
		const res = await this.api.put('/chats/users', {
			headers: {'Content-Type': 'application/json'}, data: {
				'users': [userId],
				'chatId': chatId
			}
		});
		if (res.status === 200) {
			return JSON.parse(res.response);
		}
	}

	async getChatToken(chatId: string) {
		const res = await this.api.post(`/chats/token/${chatId}`, {
			headers: {'Content-Type': 'application/json'}
		});
		if (res.status === 200) {
			return JSON.parse(res.response);
		}
	}


}

export default ChatApi;