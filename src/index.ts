import {Button} from "./components/button/button";
import renderDOM from "./core/renderDOM";
import ChatPage from "./pages/chat";
import registerComponent from "./core/registerComponent";
// Index ts - точка входа

import './app.less'
import './reset.less';
import RegistrationPage from "./pages/registration";
import Page404 from "./pages/404";
import Page500 from "./pages/500";
document.addEventListener("DOMContentLoaded", () => {
    // const chatPage = new ChatPage()
    const page404 = new Page404()
    // const registrationPage = new RegistrationPage();
    renderDOM(page404);

});