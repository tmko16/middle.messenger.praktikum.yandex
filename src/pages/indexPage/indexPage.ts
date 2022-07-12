import Block from "../../core/Block";
import './indexPage.less'
export class IndexPage extends Block {

    protected render(): string {
        //language=hbs
        return `
            <div class="navigation">
                <ul>
                    <li><a href="login">Страница Логин</a></li>
                    <li><a href="registration">Страница Регистрации</a></li>
                    <li><a href="profile">Страница пользовательского профиля</a></li>
                    <li><a href="changePassword.hbs">Страница изменения пароля пользователя</a></li>
                    <li><a href="changeProfileData.hbs">Страница изменений данных пользователей</a></li>
                    <li><a href="404.hbs">Страница 404</a></li>
                    <li><a href="500.hbs">Страница 500</a></li>
                    <li><a href="chat">Диалог с пользователем</a></li>
                </ul>
            </div>
        `
    }
}