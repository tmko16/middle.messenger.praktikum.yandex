import Block from '../../core/Block';
import './link.less';
import {Router} from '../../core/Router';
type LinkProps = {
    to: string,
    text: string
}
const router = new Router();
export class Link extends Block {

	constructor(props: LinkProps) {
		super({...props, events: {
			click: () => router.go(`/${props.to}`)
		}});
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="link" href="{{to}}">{{text}}</div>
        `;
	}
}