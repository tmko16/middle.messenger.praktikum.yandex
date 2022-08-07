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
import {Router} from './core/Router';
import Button from './components/button';
import Block from './core/Block';
import IndexPage from './pages/indexPage';
import HTTPTransport from './core/HTTPTransport';
import Store from './core/Store';

/**
 * Заметка для проверяющего.
 *
 * Для проверки страниц нужно раскоментировать соответствующую страницу.
 * Такой метод реализации оставил до того как будет внедрен корректный роутинг.
 *
 */

document.addEventListener('DOMContentLoaded',
	() => {

		const router = new Router();
		router.use('/', LoginPage as unknown as Block);
		// router.use('/registration', RegistrationPage as unknown as Block);
		// // router.use('/profilePage', ProfilePage as unknown as Block);
		// // router.use('/profileEdit', ProfilePageEdit as unknown as Block);
		// // router.use('/changePassword', ChangePassword as unknown as Block);
		// router.use('/chat', ChatPage as unknown as Block);
		router.start();
	});
