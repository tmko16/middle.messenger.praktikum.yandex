import Block from '../../core/Block';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import './loginPage.less';
import Link from '../../components/link';
import {loginValidation, onSubmitValidation, passwordValidation} from '../../utils/validators';
import {Router} from '../../core/Router';
import store, {Store, StoreEvents} from '../../core/Store';
import {getFormValues} from '../../utils/getFormValues';
import AuthController from '../../controllers/authController';

export class LoginPage extends Block {
	formValues: Record<string, string | number> = {};
	router: Router;
	private store: Store;
	private authController: AuthController;

	constructor() {
		const router = new Router();
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

		this.store = new Store();
		this.authController = new AuthController();
		this.router = router;
		this.setChildren({
			button: new Button({
				text: 'Вход', classes: 'btn_l', href: '', onSubmit: () => this.onSubmitHandler.call(this)
			})
		});
	}
	async onSubmitHandler() {
		getFormValues.apply(this);
		const loginPageData = {
			formValues: this.formValues,
			children: this.children
		};
		const signedIn = await this.authController.signIn(loginPageData);
		if (signedIn && signedIn.reason === 'User already in system' || signedIn === 'OK') {
			this.router.go('/messenger');
		}
	}

	protected render(): string {
		//language=hbs
		return `
			<div class="login-form-wrapper">
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
            </div>

		`;
	}
}