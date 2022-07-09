import Handlebars from "handlebars";
import Block from "../../core/Block";
import ButtonTemplate from './button.template';

type ButtonProps = {
    text: string,
    href?: string
    events?: {
        click?: () => void
    }

}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        //language=hbs
        return `
            <div> {{text}}</div>
        `
    }
}