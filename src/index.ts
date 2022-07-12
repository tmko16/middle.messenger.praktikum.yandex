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
import LoginPage from "./pages/login";
import {ProfilePage} from "./pages/profile/profilePage";
import {IndexPage} from "./pages/indexPage/indexPage";
import {ProfilePageEdit} from "./pages/profileEdit/profilePageEdit";
import {ChangePassword} from "./pages/changePassword/changePassword";

document.addEventListener("DOMContentLoaded", () => {
    const location = document.location.pathname
    // сделать красивую заглушку как в первом спринте
    let App: any = new IndexPage();
    switch (location) {
        case '/login' :
            App = new LoginPage();
            break;
        case '/registration' :
            App = new RegistrationPage();
            break;
        case '/chat':
            App = new ChatPage();
            break;
        case '/profile':
            App = new ProfilePage();
            break
        case '/profileEdit':
            App = new ProfilePageEdit();
            break;
        case '/changePassword':
            App = new ChangePassword();
            break;
    }

    renderDOM(App);

});