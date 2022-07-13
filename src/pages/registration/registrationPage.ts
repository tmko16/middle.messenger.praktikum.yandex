import Block from "../../core/Block";
import './registrationPage.less';
import FormInput from "../../components/formInput";
import Button from "../../components/button";
import {
    emailValidation,
    nameValidation,
    onSubmitValidation,
    passwordValidation,
    phoneValidation
} from "../../utils/validators";

export class RegistrationPage extends Block {

    constructor() {
        const fields = {




        }
        super({});

        this.setChildren({
            button: new Button({
                text: "Регистрация", classes: "btn_l", href: "#", onSubmit:  onSubmitValidation.bind(this)
            }),
            email: new FormInput({label: "Почта", name: "email", type: "text", onChange: emailValidation}),
            login: new FormInput({label: "Логин", name: "login", type: "text", onChange: passwordValidation}),
            first_name: new FormInput({label: "Имя", name: "first_name", type: "text", onChange: nameValidation}),
            second_name: new FormInput({label: "Фамилия", name: "second_name", type: "text", onChange: nameValidation}),
            phone: new FormInput({label: "Телефон", name: "phone", type: "text", onChange: phoneValidation}),
            password: new FormInput({label: "Пароль", name: "password", type: "password", onChange: passwordValidation}),
            confirm_password: new FormInput({label: "Пароль еще раз", name: "confirmPassword", type: "password", onChange: passwordValidation}),
        })
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
                        {{{first_name}}}
                        {{{second_name}}}
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