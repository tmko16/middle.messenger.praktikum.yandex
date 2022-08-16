import Block from '../../core/Block';
import './searchBar.less';
import Store from '../../core/Store';
import {UserController} from '../../controllers/userController';
import {debounce} from '../../utils/debounce';
import throttle from '../../utils/throttle';
import Button from '../button';
import Modal from '../modal/modal';
import Link from '../link';
import AddChat from '../addChat';

export class SearchBar extends Block {
	private store: Store;
	private controller: UserController;

	constructor() {
		const modal = new Modal({
			block: AddChat, context: {}
		});
		const addNewChatButton = new Button({
			classes: '',
			href: '',
			text: 'Добавить чат',
			onSubmit: () => {
				modal.openModal();
			}
		});
		super({addNewChatButton, modal});
		this.store = new Store();
		this.controller = new UserController();
		this.setProps({
			events: {
				keyup: (e: any) => {
					if (e.target.name === 'search-chat') {
						// this.onKeyUp(e);
					}
				}
			}
		});
	}

	onKeyUp(e: any) {
		// this.controller.searchUser(e.target.value);
	}

	protected render() {
		//language=hbs
		return `
            <div class="search-bar-wrapper">
                {{{addNewChatButton}}}
                <input class="search-bar" type="search" name="search-chat" placeholder="Поиск">
                {{{modal}}}
            </div>
           
		`;
	}
}