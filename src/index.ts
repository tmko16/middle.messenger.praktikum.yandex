import renderDOM from './core/renderDOM';


import './app.less';
import './reset.less';
import ChatPage from './pages/chat';
import LoginPage from './pages/login';
import IndexPage from './pages/indexPage';
import RegistrationPage from './pages/registration';
import ChangePassword from './pages/changePassword';
import Page404 from './pages/404';
import Page500 from './pages/500';
import ProfilePage from './pages/profilePage';
import ProfilePageEdit from './pages/profileEdit';
import Block from './core/Block';


document.addEventListener('DOMContentLoaded', () => {
	const location = document.location.pathname;
	let App: Block;
	switch (location) {
	case '/login.html' :
		App = new LoginPage();
		break;
	case '/registration' :
		App = new RegistrationPage();
		break;
	case '/chat':
		App = new ChatPage();
		break;
	case '/profilePage':
		App = new ProfilePage();
		break;
	case '/profileEdit':
		App = new ProfilePageEdit();
		break;
	case '/changePassword':
		App = new ChangePassword();
		break;
	case '/page404':
		App = new Page404();
		break;
	case '/page500':
		App = new Page500();
		break;
	default:
		App = new IndexPage();
	}

	renderDOM(App);

});