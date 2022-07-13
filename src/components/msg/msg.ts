import Block from '../../core/Block';
import './msg.less';

type MsgProps = {
    classes: string,
    message: string
}

export class Msg extends Block {
	constructor(props: MsgProps) {
		super(props);
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="msg {{ classes }}">
                {{ message }}
            </div>
        `;
	}
}