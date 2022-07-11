import Block from "../../core/Block";
import {Button} from "../../components/Button/button";

import './chatPage.less'

export class ChatPage extends Block {
//TODO: если передаваться все будет ввиде массива - распрарсить детей.
    constructor() {
        const button = new Button({text: 'test', onClick2: () => alert('test')})
        const butarr = [
            new Button({text: '1', onClick2: () => alert('1')}),
            new Button({text: '2', onClick2: () => alert('2')})
        ]
        super({yolo: () => alert('fds'), butarr: butarr});

    }

    yolo() {
        alert('fdsfd')
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="chat">
                <div class="chat__sidebar">
                    <div class="chat__profile-link-container">
                        <a class="chat__profile_link" href="#">Профиль</a>
                    </div>
                    <div class="chat__search">
                    </div>
                    <div class="chat__dialogs">
                    </div>
                </div>
                <div class="chat__main">
                    <span>Выберите чат, что бы отправить сообщение.</span>
                </div>

            </div>
        `
    }
}