import Block from '../../core/Block';
import './indexPage.less';
export class IndexPage extends Block {

	protected render(): string {
		//language=hbs
		return `
            <div class="navigation">
                <ul>
                    <li><a href="login.html">Страница Логин</a></li>
                    <li><a href="registration.html">Страница Регистрации</a></li>
                    <li><a href="profilePage.html">Страница пользовательского профиля</a></li>
                    <li><a href="profileEdit.html">Страница изменения пользовательского профиля</a></li>
                    <li><a href="changePassword.html">Страница изменения пароля пользователя</a></li>
                    <li><a href="page404.html">Страница 404</a></li>
                    <li><a href="page500.html">Страница 500</a></li>
                    <li><a href="chat.html">Диалог с пользователем</a></li>
                </ul>
            </div>
        `;
	}
}