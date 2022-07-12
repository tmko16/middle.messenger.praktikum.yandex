import Block from "../../core/Block";
import './link.less'
type LinkProps = {
    to: string,
    text: string
}
export class Link extends Block {

    constructor(props: LinkProps) {
        super(props);
    }

    protected render(): string {
        //language=hbs
        return `
            <a class="link" href="{{to}}">{{text}}</a>
        `
    }
}