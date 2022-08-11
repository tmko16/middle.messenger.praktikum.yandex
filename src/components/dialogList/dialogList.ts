import Block from '../../core/Block';
import Dialog from '../dialog';
import chatController from '../../controllers/chatController';
import Link from '../link';

export class DialogList extends Block {
	private chatController: any;

	constructor( ) {
		super();
		this.chatController = new chatController();
	}
	async componentDidMount() {
		const res = await this.chatController.getChats();
		const dialogs = res.map((dialog: any) => {
			return new Dialog({...dialog, onClick: () => alert('teset')});
		});
		this.setChildren({dialogs});
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