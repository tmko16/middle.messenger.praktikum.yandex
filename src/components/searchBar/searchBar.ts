import Block from '../../core/Block';
import './searchBar.less';
import Store from '../../core/Store';
import {UserController} from '../../controllers/userController';
import {debounce} from '../../utils/debounce';
import throttle from '../../utils/throttle';

export class SearchBar extends Block {
	private store: Store;
	private controller: UserController;
	private searchValue = '';
	private searchCalled = false;

	constructor() {
		super();
		this.store = new Store();
		this.controller = new UserController();
		this.setProps({
			events: {
				keyup: (e: any) => {
					this.onKeyUp(e);
				}
			}
		});
	}

	onKeyUp(e: any) {
		this.controller.searchUser(e.target.value);
	}

	protected render() {
		//language=hbs
		return `
            <input class="search-bar" type="search" name="search" placeholder="Поиск">
		`;
	}
}