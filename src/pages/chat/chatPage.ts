import Block from "../../core/Block";
import {Button} from "../../components/button/button";

import './chatPage.less'
import {SearchBar} from "../../components/searchBar/searchBar";
import Dialog from "../../components/dialog";
import Messenger from "../../components/messenger";
import Link from "../../components/link";

export class ChatPage extends Block {
//TODO: если передаваться все будет ввиде массива - распрарсить детей.
    private chosenDialogId: string = '1';

    constructor() {
        const profileLink = new Link({text: "Профиль", to: "profile"})
        const messenger = new Messenger({messages: [], name: "Васек", wasOnline: "11:13"})
        const dialog = new Dialog({
            id: '1',
            avatar: "https://source.unsplash.com/random",
            name: "Андрей",
            lastMsg: "Не ну займи а...",
            lastMsgTime: "10:23",
            msgCount: 12,

        })

        const searchBar = new SearchBar()
        super({
            searchBar,
            dialog,
            messenger,
            profileLink
        });


    }

    protected render(): string {
        console.log(this)
        //language=hbs
        return `
            <div class="chat">
                <div class="chat__sidebar">
                    <div class="chat__profile-link-container">
                        {{{profileLink}}}
                    </div>
                    <div class="chat__search">
                        {{{searchBar}}}
                    </div>
                    <div class="chat__dialogs">
                        {{{ dialog }}}
                    </div>
                </div>
                <div class="chat__main">
                    {{{messenger}}}
                </div>

            </div>
        `
    }
}