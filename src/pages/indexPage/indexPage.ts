import Block from '../../core/Block';
import './indexPage.less';
export class IndexPage extends Block {

	protected render(): string {
		//language=hbs
		return `
            <div class="navigation">
                <ul>
                    <li><a href="login">Страница Логин</a></li>
                    <li><a href="registration">Страница Регистрации</a></li>
                    <li><a href="profilePage">Страница пользовательского профиля</a></li>
                    <li><a href="profileEdit">Страница изменения пользовательского профиля</a></li>
                    <li><a href="changePassword">Страница изменения пароля пользователя</a></li>
                    <li><a href="page404">Страница 404</a></li>
                    <li><a href="page500">Страница 500</a></li>
                    <li><a href="chat">Диалог с пользователем</a></li>
                </ul>
            </div>
        `;
	}
}