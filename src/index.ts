import './app.less';
import './reset.less';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';
import ChatPage from './pages/chat';
import ProfilePage from './pages/profilePage';
import ProfilePageEdit from './pages/profileEdit';
import ChangePassword from './pages/changePassword';
import Page404 from './pages/404';
import Page500 from './pages/500';
import renderDOM from './core/renderDOM';

/**
 * Заметка для проверяющего.
 *
 * Для проверки страниц нужно раскоментировать соответствующую страницу.
 * Такой метод реализации оставил до того как будет внедрен корректный роутинг.
 *
 */
document.addEventListener('DOMContentLoaded', () => {

	const App = new LoginPage();
	// const App = new RegistrationPage();
	// const App = new ChatPage();
	// const App = new ProfilePage();
	// const App = new ProfilePageEdit();
	// const App = new ChangePassword();
	// const App = new Page404();
	// const App = new Page500();
	renderDOM(App);
});
