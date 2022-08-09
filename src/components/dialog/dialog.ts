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
				click: props.onClick
			}
		});

	}

	protected render(): string {
		//language=hbs
		return `
            <div class="dialog">
                <div class="dialog__avatar">
                    <img src="{{ avatar }}" alt="">
                </div>
                <div class="dialog__main">
                    <div class="dialog__name">
                        {{ name }}
                    </div>
                    <div class="dialog__last-msg">
                        {{ lastMsg }}
                    </div>
                </div>
                <div class="dialog__info">
                    <div class="dialog__last-msg-time">
                        {{ lastMsgTime }}
                    </div>
                    <div class="dialog__msg-count">
                        <span> {{ msgCount }}</span>
                    </div>
                </div>
            </div>
        `;
	}
}