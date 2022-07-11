import Block from "../../core/Block";
import './dialog.less'

type DialogProps = {
    avatar: string,
    name: string,
    lastMsg: string,
    lastMsgTime: string,
    msgCount: number
}

export class Dialog extends Block {
    constructor(props: DialogProps) {
        super(props);

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
        `
    }
}