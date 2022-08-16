import Store, {StoreEvents} from '../core/Store';
import chatApi from '../api/chatApi';
import ChatApi from '../api/chatApi';
import {UserController} from './userController';

class ChatController {
	private chatApi: ChatApi;
	private store: Store;
	private userController: UserController;

	constructor() {
		this.chatApi = new chatApi();
		this.userController = new UserController();
		this.store = new Store();
	}

	async getChats() {
		const res = await this.chatApi.getChats();
		return JSON.parse(res.response);
	}

	async createChat(chatTitle: string) {
		return this.chatApi.createChat(chatTitle);
	}

	async addChatAndUser(chatTitle: string, userName: string) {
		const createdChat = await this.createChat(chatTitle);
		const similarUsers = await this.userController.searchUser(userName);
		const user = similarUsers.filter((user: any) => user.login === userName)[0];
		const addUserToChat = await this.chatApi.addUserToChat(user.id, createdChat.id);
	}

	async  getChatToken(chatId: string) {
		const token = await this.chatApi.getChatToken(chatId);
		this.store.set('chatToken', token.token);
		return token;
	}


}

export default ChatController;