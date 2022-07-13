import Block from '../../core/Block';
import './btn.less';

type ButtonProps = {
    href: string,
    text: string,
    classes?: string,
    onSubmit?: any
}

export class Button extends Block {
	constructor(props: ButtonProps) {
		super({
			...props, events: {
				click: props.onSubmit
			}
		});
	}

	protected render(): string {
		//language=hbs
		return `
            <a href="{{ href }}">
                <button class="btn {{classes}}">
                    {{ text }}
                </button>
            </a>
        `;
	}
}