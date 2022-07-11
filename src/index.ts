import {Button} from "./components/button/button";
import renderDOM from "./core/renderDOM";
import ChatPage from "./pages/chat";
import registerComponent from "./core/registerComponent";
// Index ts - точка входа

import './app.less'
import './reset.less';
document.addEventListener("DOMContentLoaded", () => {
    const chatPage = new ChatPage()
    renderDOM(chatPage);

});