import Block from '../../core/Block';
import './dialog.less';

export type DialogProps = {
	id: string,
	title: string,
	avatar: string,
	last_message: string,
	unread_count: number,
	onClick?: () => void
}

export class Dialog extends Block {
	constructor(props: DialogProps) {
		super({
			...props, events: {
				// click: props.onClick
				click: props.onClick
			}
		});
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="dialog " data-chat-id={{{id}}}>
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