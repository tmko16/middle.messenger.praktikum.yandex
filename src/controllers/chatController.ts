import AuthApi from '../api/authApi';
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
		const chats = await this.chatApi.getChats();
		return chats;

	}


}
export default ChatController;