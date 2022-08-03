import Block from '../../core/Block';
import Button from '../../components/button';
import FormInput from '../../components/formInput';
import './loginPage.less';
import Link from '../../components/link';
import {loginValidation, onSubmitValidation, passwordValidation} from '../../utils/validators';
import {Router} from '../../core/Router';
import store, {StoreEvents} from '../../core/Store';
import UserController from '../../controllers/userController';
import {getFormValues} from '../../utils/getFormValues';
import {SignUpProps} from '../../types';

export class LoginPage extends Block {
	protected formValues: Record<string, string | number> = {};
	router: Router;
	private controller: UserController;

	constructor() {
		const router = new Router();

		store.on(StoreEvents.Updated, () => {
			this.setProps(store.getState());
		});

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
		this.controller = new UserController();
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
			this.controller.signIn(this.formValues as unknown as SignUpProps);
		} else {
			console.log('not valid');
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