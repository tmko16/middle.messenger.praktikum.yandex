import Block from "../../core/Block";
import {ChatTemplate} from "./Chat.template";
import {Button} from "../../components/Button/button";


export class ChatPage extends Block {
    constructor() {
        super({button: new Button({text:'test'})});
    }


    protected render(): string {
        //language=hbs
        return `
            <div>
                <span>sdf</span>
                {{{button}}}
            </div>
        `
    }
}