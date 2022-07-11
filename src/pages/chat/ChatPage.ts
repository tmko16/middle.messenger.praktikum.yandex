import Block from "../../core/Block";
import {Button} from "../../components/button/button";

import './chatPage.less'
import {SearchBar} from "../../components/searchBar/searchBar";

export class ChatPage extends Block {
//TODO: если передаваться все будет ввиде массива - распрарсить детей.
    constructor() {


        super({
            searchBar: new SearchBar()
        });

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
                        {{{searchBar}}}
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