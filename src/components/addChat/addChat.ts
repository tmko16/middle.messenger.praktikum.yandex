import Block from '../../core/Block';
import './addChat.less';

export class AddChat extends Block {
	constructor(props: any) {
		super({
			...props
		});

		console.log('=>(addChat.ts:11) this', this);
	}


	protected render(): string {
		//language=hbs
		return `
            <div class="add-chat">
                Добавляем пользователя {{{text}}} {{{to}}}
            </div>`;
	}

}


