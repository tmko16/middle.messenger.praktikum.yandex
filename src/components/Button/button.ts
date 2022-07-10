import Handlebars from "handlebars";
import Block from "../../core/Block";
import ButtonTemplate from './button.template';

type ButtonProps = {
    text: string,
    href?: string
    onClick2: any,
    events?: {
        click?: () => void
    }

}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super({...props, events: {
            click: props.onClick2
            }});
        console.log(props, 'sdfsdfsdfsdf')
    }

    render() {
        //language=hbs
        return `
            <div> {{text}}</div>
        `
    }
}