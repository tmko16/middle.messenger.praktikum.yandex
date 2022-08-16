import Block from '../../core/Block';
import Button from '../button';
import './chatActionMenu.less';
import Store, {StoreEvents} from '../../core/Store';

export class ChatActionMenu extends Block {
	private store: Store;
	constructor() {
		super();
		this.store = new Store();
		const deleteCurrentChat = new Button({
			text: 'Удалить чат',
			onSubmit: () => console.log('удалить пользователь чат')
		});
		const deleteUsersFromChat = new Button({
			text: 'Удалить пользователей из чата', onSubmit: () => {
				console.log('удалить всех пользователей из чата ');
			}
		});
		this.setChildren({
			deleteCurrentChat, deleteUsersFromChat
		});
		this.store.on(StoreEvents.Updated, () => {
			console.log(this.store);
		});
	}

	componentDidMount(props: any) {
		console.log(this.store.getState(), 'внутри модалки');
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="chat-actions">
                <div class="chat-action">
                    {{{deleteCurrentChat}}}
                </div>
                <div class="chat-action">
                    {{{deleteUsersFromChat}}}
                </div>
               

            </div>
		`;
	}
}