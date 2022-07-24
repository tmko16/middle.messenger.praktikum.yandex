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

/**
 * Заметка для проверяющего.
 *
 * Для проверки страниц нужно раскоментировать соответствующую страницу.
 * Такой метод реализации оставил до того как будет внедрен корректный роутинг.
 *
 */

// login">Страница Логин</a></li>
// <li><a href="registration">Страница Регистрации</a></li>
// <li><a href="profilePage">Страница пользовательского профиля</a></li>
// <li><a href="profileEdit">Страница изменения пользовательского профиля</a></li>
// <li><a href="changePassword">Страница изменения пароля пользователя</a></li>
// <li><a href="page404">Страница 404</a></li>
// <li><a href="page500">Страница 500</a></li>
// <li><a href="chat">Д
document.addEventListener('DOMContentLoaded',
	() => {
		const router = new Router();
		router.use('/', IndexPage as unknown  as  Block);
		router.use('/login', LoginPage as unknown as Block);
		router.use('/registration', RegistrationPage as unknown as Block);
		router.use('/profilePage', ProfilePage as unknown as Block);
		router.use('/profileEdit', ProfilePageEdit as unknown as Block);
		router.use('/changePassword', ChangePassword as unknown as Block);
		router.use('/chat', ChatPage as unknown as Block);

		router.start();
	});
