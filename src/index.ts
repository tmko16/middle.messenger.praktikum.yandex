import {Button} from "./components/Button/button";
import renderDOM from "./core/renderDOM";
import ChatPage from "./pages/chat";
import registerComponent from "./core/registerComponent";
// Index ts - точка входа
document.addEventListener("DOMContentLoaded", () => {
    registerComponent(Button)
    const chatPage = new ChatPage()

    renderDOM(chatPage);

});