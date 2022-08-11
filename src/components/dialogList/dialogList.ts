import Block from '../../core/Block';

export class DialogList extends Block {

	constructor(dialogs: any) {
		super();
		this.setChildren(dialogs);
		console.log(dialogs);
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="dialog-list">
				{{{dialogs}}}
            </div>
		`;
	}
}