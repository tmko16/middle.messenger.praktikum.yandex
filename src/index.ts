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
import DialogList from './components/dialogList';
import {Authorised} from './types';
import {ChangeAvatar} from './pages/changeAvatar';

/**
 * Заметка для проверяющего.
 *
 * Тестовыве данные пользователей:
 * Пользователь 1
 * ````
 * SaskeUchiha
 * Fazidi12341
 * ````
 * Пользователь 2
 * ```
 * NarutoUzumaki
 * Ikfjshy6
 * ```
 *
 * Добавление нового чата происходит в списке чатов на нажатие кнопки Добавить чат, внутри которого создается
 * название чата и указывается Логин пользователя, с которым будет вестись переписка.
 *
 * Регистрация пользоватля также работает.
 */

document.addEventListener('DOMContentLoaded',
	() => {

		const router = new Router();
		const store = new Store();
		router.use('/', LoginPage as unknown as Block);
		router.use('/registration', RegistrationPage as unknown as Block);
		router.use('/profilePage', ProfilePage as unknown as Block);
		router.use('/settings', ProfilePageEdit as unknown as Block);
		router.use('/changePassword', ChangePassword as unknown as Block);
		router.use('/messenger', ChatPage as unknown as Block);
		router.use('/changeAvatar', ChangeAvatar as unknown as Block);
		router.start();
	});
