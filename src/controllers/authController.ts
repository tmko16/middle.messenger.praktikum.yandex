import AuthApi from '../api/authApi';
import Store from '../core/Store';
import {onSubmitValidation} from '../utils/validators';
import {Authorised} from '../types';
import {Router} from '../core/Router';

class AuthController {
	private authApi: AuthApi;
	private store: Store;
	private router: Router;

	constructor() {
		this.router = new Router();
		this.authApi = new AuthApi();
		this.store = new Store();
	}

	async signIn(loginPageData: any) {
		if (onSubmitValidation(loginPageData.formValues, loginPageData.children)) {
			return await this.authApi.signIn(loginPageData.formValues);
		}
	}

	// TODO: разобраться с тс игнорами везде где только возможно будет.
	async signUp(RegistrationPageData: any) {
		if (onSubmitValidation(RegistrationPageData.formValues, RegistrationPageData.children)) {
			await this.authApi.signUp(RegistrationPageData.formValues);
			const state = this.store.getState();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (state.registrationData.id) {
				await this.authApi.getUser();
				return true;
			} else {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				alert('Не удалось авторизоваться ' + state.registrationData.reason);
				return false;
			}
		} else {
			return false;
		}
	}

	logOut() {
		this.authApi.logOut().then(r => {
			localStorage.setItem('authorised', Authorised.N);
		});
	}

	async getUser() {
		const res = await this.authApi.getUser();
		return res;
	}


}

export default AuthController;