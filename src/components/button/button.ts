import Block from '../../core/Block';
import './btn.less';

type ButtonProps = {
    href?: string,
    text: string,
    classes?: string,
    onSubmit?: () => void | undefined
}

export class Button extends Block {
	constructor(props: { onSubmit?: () => void; classes?: string; text?: string; href?: string }) {
		super({
			...props, events: {
				click: props.onSubmit,
			}
		});
	}

	protected render(): string {
		//language=hbs
		return `
                <button class="btn {{classes}}">
                    {{ text }}
                </button>
        `;
	}
}