import {Button} from "./components/button/button";
import renderDOM from "./core/renderDOM";
import ChatPage from "./pages/chat";
import registerComponent from "./core/registerComponent";
// Index ts - точка входа

import './app.less'
import './reset.less';
import RegistrationPage from "./pages/registration";
import {ProfilePage} from "./pages/profile/profilePage";
document.addEventListener("DOMContentLoaded", () => {
    // const chatPage = new ChatPage()
    // const registrationPage = new RegistrationPage();
    const profilePage = new ProfilePage({isProfileEdit: false, isProfileView: true, changePassword: false});
    renderDOM(profilePage);

});