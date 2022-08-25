import './app.less';
import './reset.less';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';
import ChatPage from './pages/chat';
import ChangePassword from './pages/changePassword';
import {Router} from './core/Router';
import Block from './core/Block';
import Store from './core/Store';
import {ChangeAvatar} from './pages/changeAvatar';
import ProfilePage from './pages/profilepage';
import ProfilePageEdit from './pages/profileedit';

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
 */
document.addEventListener('DOMContentLoaded',
	() => {
		const router = new Router();
		router.use('/', LoginPage as unknown as Block);
		router.use('/registration', RegistrationPage as unknown as Block);
		router.use('/profilePage', ProfilePage as unknown as Block);
		router.use('/settings', ProfilePageEdit as unknown as Block);
		router.use('/changePassword', ChangePassword as unknown as Block);
		router.use('/messenger', ChatPage as unknown as Block);
		router.use('/changeAvatar', ChangeAvatar as unknown as Block);
		router.start();
	});
