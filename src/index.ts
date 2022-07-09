import {Button} from "./components/Button/button";
import renderDOM from "./core/renderDOM";
import ChatPage from "./pages/chat";
import registerComponent from "./core/registerComponent";
// Index ts - точка входа
document.addEventListener("DOMContentLoaded", () => {

    const chatPage = new ChatPage()

    renderDOM(chatPage);

});