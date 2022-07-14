import Block from '../../core/Block';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import './loginPage.less';
import Link from '../../components/link';
import {formValidators, loginValidation, onSubmitValidation, passwordValidation} from '../../utils/validators';
import {getFormValues} from '../../utils/getFormValues';

export class LoginPage extends Block {
	protected formValues: Record<string, string | number> = {};

	constructor() {

		const noAccount = new Link({text: 'Нет аккаунта?', to: 'registration'});
		const fields = {
			login: new FormInput({
				label: 'Логин', name: 'login', type: 'text', validation: loginValidation
			}),
			password: new FormInput({
				label: 'Пароль',
				name: 'password',
				type: 'password',
				validation: passwordValidation
			}),
		};
		super({...fields, noAccount});


		this.setChildren({
			button: new Button({
				text: 'Вход', classes: 'btn_l', href: '#', onSubmit: this.onSubmitHandler.bind(this)
			})
		});
	}
	onSubmitHandler () {
		getFormValues.apply(this);
		onSubmitValidation(this.formValues, this.children);
		console.log(this.formValues);

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
                    <div class="login-form__actions ">
                        {{{button}}}
                        {{{noAccount}}}
                    </div>
                </div>
            </div>

        `;
	}
}