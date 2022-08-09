import Block from '../../core/Block';

import './chatPage.less';
import Dialog from '../../components/dialog';
import Messenger from '../../components/messenger';
import Link from '../../components/link';
import SearchBar from '../../components/searchBar';
import {Router} from '../../core/Router';
import AuthController from '../../controllers/authController';
import Store, {StoreEvents} from '../../core/Store';
import ChatController from '../../controllers/chatController';
import {DialogProps} from '../../components/dialog/dialog';

export class ChatPage extends Block {
	router: Router;
	private store: Store;
	private chatController: ChatController;
	constructor() {
		const profileLink = new Link({text: 'Профиль', to: 'profilePage'});
		const searchBar = new SearchBar();
		super({
			searchBar,
			// dialog,
			// messenger,
			profileLink
		});
		this.store = new Store();
		this.chatController = new ChatController();
		this.router = new Router();
		this.store.on(StoreEvents.Updated, () => {
			console.log('=>(chatPage.ts:43) this.store.getState', this.store.getState());
			this.setProps(this.store.getState());
		});
	}
	async componentDidMount() {
		console.log('Компонент манта');
		await this.chatController.getChats();

		console.log('=>(chatPage.ts:38) this.props', this.props);
		this.props.user.chats.forEach((chat: DialogProps) => {
			const dialog = new Dialog(chat);
		});

	}

	protected render(): string {
		//language=hbs
		return `
            <div class="chat">
                <div class="chat__sidebar">
                    <div class="chat__profile-link-container">
                        {{{profileLink}}}
                    </div>
                    <div class="chat__search">
                        {{{searchBar}}}
                    </div>
                    <div class="chat__dialogs">
<!--                        {{{ dialog }}}-->
                    </div>
                </div>
                <div class="chat__main">
<!--                    {{{messenger}}}-->
                </div>

            </div>
        `;
	}
}