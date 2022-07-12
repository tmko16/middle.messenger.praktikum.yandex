import Block from "../../core/Block";
import './registrationPage.less';
import FormInput from "../../components/formInput";
import Button from "../../components/button";

export class RegistrationPage extends Block {

    constructor() {
        const button = new Button({text: "Регистрация", classes: "btn_l", href: "#"})
        const fields = {
            email: new FormInput({label: "Почта", name: "email", type: ""}),
            login: new FormInput({label: "Логин", name: "login", type: ""}),
            firstName: new FormInput({label: "Имя", name: "first_name", type: ""}),
            secondName: new FormInput({label: "Фамилия", name: "second_name", type: ""}),
            phone: new FormInput({label: "Телефон", name: "phone", type: ""}),
            password: new FormInput({label: "Пароль", name: "password", type: "password"}),
            confirmPassword: new FormInput({label: "Пароль еще раз", name: "confirmPassword", type: "password"}),
        }
        super({...fields, button});
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="registration-form">
                <div class="registration-form__content">
                    <div class="registration-form__title">Регистрация</div>
                    <div class="registration-form__fields">
                        {{{email}}}
                        {{{login}}}
                        {{{fisrtName}}}
                        {{{secondName}}}
                        {{{phone}}}
                        {{{password}}}
                        {{{confirmPassord}}}
                    </div>
                    <div class="registration-form__actions">
                        {{{button}}}
                    </div>
                </div>
            </div>

        `
    }
}