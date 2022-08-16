import Block from '../core/Block';
type MsgAreaActionProps = {
	onClick: ()=> void
}
export class MsgAreaAction extends Block {
	constructor(props: MsgAreaActionProps) {
		super({...props, events: {
			click: () => props.onClick()
		}});
	}
	protected render(): string {
		//language=hbs
		return `
            <div class="msg-area__action-button">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
		`;
	}
}