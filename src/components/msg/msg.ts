import Block from '../../core/Block';
import './msg.less';
import Store from '../../core/Store';

export type MsgProps = {
	content: string
	id: number
	time: string
	type: string
	user_id: number
	classes? : string
}

export class Msg extends Block {
	private store: Store;
	constructor(props: MsgProps) {
		super(props);

		this.store = new Store();
		console.log(this.store, props);
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="msg {{ classes }}">
                {{ content }}
            </div>
        `;
	}
}