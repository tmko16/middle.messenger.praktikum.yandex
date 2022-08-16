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
		});
		const deleteUsersFromChat = new Button({
			text: 'Удалить пользователей из чата', onSubmit: () => {
			}
		});
		this.setChildren({
			deleteCurrentChat, deleteUsersFromChat
		});

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