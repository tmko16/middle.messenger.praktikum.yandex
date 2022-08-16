import Block from '../../core/Block';

export class ChatActionMenu extends Block {
	constructor() {
		super();
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="chat-actions">
                <p>мы сможем все</p>
            </div>
		`;
	}
}