import Block from "../../core/Block";
import {Button} from "../../components/button/button";

import './chatPage.less'
import {SearchBar} from "../../components/searchBar/searchBar";
import Dialog from "../../components/dialog";

export class ChatPage extends Block {
//TODO: если передаваться все будет ввиде массива - распрарсить детей.
    constructor() {

        super({
            searchBar: new SearchBar(),
            dialog: new Dialog({
                avatar: "https://source.unsplash.com/random",
                name: "Андрей",
                lastMsg: "Не ну займи а...",
                lastMsgTime: "10:23",
                msgCount: 12
            })
        });

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
                        {{{ dialog }}}
                    </div>
                </div>
                <div class="chat__main">
                    <span>Выберите чат, что бы отправить сообщение.</span>
                </div>

            </div>
        `
    }
}