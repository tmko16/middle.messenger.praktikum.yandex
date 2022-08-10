import Block from '../../core/Block';

export class DialogList extends Block {

	constructor(chats: any) {
		super();
		this.setChildren(chats);
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="dialog-list">
            </div>
		`;
	}
}