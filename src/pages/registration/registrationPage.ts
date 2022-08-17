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
import store, {Store, StoreEvents} from '../../core/Store';
import AuthController from '../../controllers/authController';
import {Router} from '../../core/Router';


export class RegistrationPage extends Block {
	protected formValues: Record<string, string | number> = {};
	router: Router;
	private store: Store;
	private authController: AuthController;
	constructor() {
		super({});

		this.store = new Store();
		this.authController = new AuthController();
		this.store.on(StoreEvents.Updated, () => {
			this.setState(this.store.getState());
		});
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
		this.router = new Router();
		this.store.on(StoreEvents.Updated, () => {
			this.setState(this.store.getState());
		});
	}

	async onSubmitHandler() {
		getFormValues.apply(this);
		const loginPageData = {
			formValues: this.formValues,
			children: this.children
		};
		const signedUp = await this.authController.signUp(loginPageData);
		if (signedUp) {
			this.router.go('/messenger');
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