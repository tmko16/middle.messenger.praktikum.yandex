import Block from '../../core/Block';

export class DialogList extends Block {
	constructor(chats: any) {
		super();
		console.log(chats , 'внутри чат листа');
		this.setProps(chats);
	}

	protected render(): string {
		//language=hbs
		return `
			<ul>
				<li>1</li>
				<li>2</li>
			</ul>
		`;
	}
}