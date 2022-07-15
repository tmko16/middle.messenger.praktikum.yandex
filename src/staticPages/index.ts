import LoginPage from '../pages/login';
import renderDOM from '../core/renderDOM';
import '../app.less';
import '../reset.less';
import Block from '../core/Block';
import RegistrationPage from '../pages/registration';
import ChatPage from '../pages/chat';
import ChangePassword from '../pages/changePassword';
import Page404 from '../pages/404';
import Page500 from '../pages/500';
import IndexPage from '../pages/indexPage';

const location = document.location.pathname;
let App: Block;
switch (location) {
case '/login.html' :
	App = new LoginPage();
	break;
case '/registration.html' :
	App = new RegistrationPage();
	break;
case '/chat.html':
	App = new ChatPage();
	break;
// case '/profilePage.html':
// 	App = new ProfilePage();
// 	break;
// case '/profileEdit.html':
// 	App = new ProfilePageEdit();
// 	break;
case '/changePassword.html':
	App = new ChangePassword();
	break;
case '/page404.html':
	App = new Page404();
	break;
case '/page500.html':
	App = new Page500();
	break;
default:
	App = new IndexPage();
}
renderDOM(App);