import Block from "../../core/Block";
import './btn.less';
type ButtonProps = {
    href: string,
    text: string,
    classes?: string
}
export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    protected render(): string {
        //language=hbs
        return `
            <a href="{{ href }}">
                <button class="btn {{classes}}">
                    {{ text }}
                </button>
            </a>
        `
    }
}