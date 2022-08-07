import Block from '../../core/Block';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import './loginPage.less';
import Link from '../../components/link';
import {loginValidation, onSubmitValidation, passwordValidation} from '../../utils/validators';
import {Router} from '../../core/Router';
import store, {Store, StoreEvents} from '../../core/Store';
import {getFormValues} from '../../utils/getFormValues';
import {SignUpProps} from '../../types';
import AuthController from '../../controllers/authController';

export class LoginPage extends Block {
	protected formValues: Record<string, string | number> = {};
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
		this.store.on(StoreEvents.Updated, () => {
			this.setState(this.store.getState());
		});
		this.router = router;
		this.setChildren({
			button: new Button({
				text: 'Вход', classes: 'btn_l', href: '', onSubmit: () => this.onSubmitHandler.call(this)
			})
		});
	}

	onSubmitHandler() {

		getFormValues.apply(this);
		const validationRes = onSubmitValidation(this.formValues, this.children);
		if (validationRes) {
			this.authController.signIn(this.formValues);
		}

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