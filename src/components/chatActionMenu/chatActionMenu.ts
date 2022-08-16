import Block from '../../core/Block';
import Button from '../button';
import './chatActionMenu.less';

export class ChatActionMenu extends Block {
	constructor() {
		super();
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