import Block from '../../core/Block';
import './registrationPage.less';
import FormInput from '../../components/formInput';
import Button from '../../components/button';
import {
	emailValidation, loginValidation,
	nameValidation,
	onSubmitValidation,
	passwordValidation,
	phoneValidation
} from '../../utils/validators';
import {getFormValues} from '../../utils/getFormValues';
import store, {StoreEvents} from '../../core/Store';
import UserController from '../../controllers/userController';
import {SignUpProps} from '../../types';

// const router = new Router();

export class RegistrationPage extends Block {
	protected formValues: Record<string, string | number> = {};
	private controller: UserController;

	constructor() {
		super({});
		store.on(StoreEvents.Updated, () => {
			this.setState(store.getState());
		});
		this.controller = new UserController();

		this.setChildren({
			button: new Button({
				text: 'Регистрация', classes: 'btn_l', href: '', onSubmit: () => this.onSubmitHandler.call(this)
			}),
			email: new FormInput({label: 'Почта', name: 'email', type: 'text', validation: emailValidation}),
			login: new FormInput({label: 'Логин', name: 'login', type: 'text', validation: loginValidation}),
			first_name: new FormInput({label: 'Имя', name: 'first_name', type: 'text', validation: nameValidation}),
			second_name: new FormInput({
				label: 'Фамилия',
				name: 'second_name',
				type: 'text',
				validation: nameValidation
			}),
			phone: new FormInput({label: 'Телефон', name: 'phone', type: 'text', validation: phoneValidation}),
			password: new FormInput({
				label: 'Пароль',
				name: 'password',
				type: 'password',
				validation: passwordValidation
			}),
		});
	}

	onSubmitHandler() {
		getFormValues.apply(this);
		const validationRes = onSubmitValidation(this.formValues, this.children);
		if (validationRes) {
			this.controller.signUp(this.formValues as unknown as SignUpProps);
		} else {
			console.log('not valid');
		}

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
                    </div>
                    <div class="registration-form__actions">
                        {{{button}}}
                    </div>
                </div>
            </div>

		`;
	}
}