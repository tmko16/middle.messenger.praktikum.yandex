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
		const currentUserStore = this.store.getState().currentUserId;
		const msgUserId = props.user_id;
		const msgClass = currentUserStore === msgUserId ? 'msg_my' : 'msg_alien';
		this.setProps({msgStyle: msgClass });
	}

	protected render(): string {

		//language=hbs
		return `
            <div class="msg {{ classes }} {{msgStyle}}">
                {{ content }}
            </div>
        `;
	}
}