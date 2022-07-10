import Block from "../../core/Block";
import {ChatTemplate} from "./Chat.template";
import {Button} from "../../components/Button/button";

import './chatPage.less'

export class ChatPage extends Block {

    constructor() {
        super({yolo: () => alert('fds')});
    }
    yolo() {
        alert('fdsfd')
    }

    protected render(): string {


        //language=hbs
        return `
            <div>
                <span class="redsy">312</span>
                {{{Button text='dfgdf' onClick2=yolo}}}
            </div>
        `
    }
}