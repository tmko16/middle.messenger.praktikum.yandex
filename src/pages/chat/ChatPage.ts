import Block from "../../core/Block";
import {ChatTemplate} from "./Chat.template";
import {Button} from "../../components/Button/button";


export class ChatPage extends Block {
    constructor() {
        super();
    }
    componentDidMount() {
        this.children.button = new Button({text:'st'})
    }

    protected render(): string {
        console.log(this)
        return `
             <div>
        <span>Это страница</span>
    </div>
        `
    }
}