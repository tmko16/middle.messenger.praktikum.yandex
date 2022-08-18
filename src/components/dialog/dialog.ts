import Block from '../../core/Block';
import './dialog.less';
import Store from '../../core/Store';

export type DialogProps = {
	id: string,
	title: string,
	avatar: string,
	last_message: Record<string, unknown>,
	unread_count: number,
	onClick?: () => void
}

export class Dialog extends Block {
	private store: Store;

	constructor(props: DialogProps) {
		super({
			...props, events: {
				// click: props.onClick
				click: props.onClick
			}
		});
		const avatar = props.avatar ? props.avatar : 'https://picsum.photos/200/300';

		const last_message = props.last_message ? props.last_message.content : 'Нет сообщений';
		const unread_count = props.last_message && props.last_message.unread_count ? props.last_message.unread_count : '0';
		this.setProps({...props, last_message, avatar, unread_count});
		this.store = new Store();

	}

	protected render(): string {
		//language=hbs
		return `
            <div class="dialog" data-chat-id={{{id}}}>
                <div class="dialog__avatar">
                    <img src="{{ avatar }}" alt="">
                </div>
                <div class="dialog__main">
                    <div class="dialog__name">
                        {{ title }}
                    </div>
                    <div class="dialog__last-msg">
                        {{ last_message }}
                    </div>
                </div>
                <div class="dialog__info">
                    <div class="dialog__last-msg-time">
                        {{ lastMsgTime }}
                    </div>
                    <div class="dialog__msg-count">
                        <span> {{ unread_count }}</span>
                    </div>
                </div>
            </div>
		`;
	}
}