import Store from '../core/Store';
import chatApi from '../api/chatApi';
import ChatApi from '../api/chatApi';

class ChatController {
	private chatApi: ChatApi;
	private store: Store;

	constructor() {
		this.chatApi = new chatApi();
		this.store = new Store();
	}

	async getChats() {
		const res = await this.chatApi.getChats();
		return JSON.parse(res.response);
	}


}

export default ChatController;