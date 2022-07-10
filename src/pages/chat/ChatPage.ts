import Block from "../../core/Block";
import {ChatTemplate} from "./Chat.template";
import {Button} from "../../components/Button/button";

import './chatPage.less'
export class ChatPage extends Block {
    constructor() {
        super({button: new Button({text:'test', events: {click: () => alert('yolo')}})});
    }


    protected render(): string {
        //language=hbs
        return `
            <div>
                <span class="redsy">sdf</span>
                {{{button}}}
            </div>
        `
    }
}