import Block from "../../core/Block";
import Button from "../../components/button";
import FormInput from "../../components/formInput";
import './loginPage.less';
import RegistrationPage from "../registration";
import Link from "../../components/link";
export class LoginPage extends Block {
    constructor() {
        const button = new Button({text: "Вход", classes: "btn_l", href: "#"})
        const noAccount = new Link({text: "Нет аккаунта?", to: "registration"})
        const fields = {
            login: new FormInput({label: "Логин", name: "login", type: ""}),
            password: new FormInput({label: "Пароль", name: "password", type: "password"}),
        }
        super({...fields, button, noAccount});
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="login-form">
                <div class="login-form__content">
                    <div class="login-form__title"><h1>{{ title }}</h1></div>
                    <div class="login-form__fields">
                        {{{login}}}
                        {{{password}}}
                    </div>
                    <div class="login-form__actions">
                        {{{button}}}
                        {{{noAccount}}}
                    </div>
                </div>
            </div>

        `
    }
}