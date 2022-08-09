import AuthApi from '../api/authApi';
import Store from '../core/Store';
import Block from '../core/Block';
import LoginPage from '../pages/login';
import {formValidators, onSubmitValidation} from '../utils/validators';
import {AuthStatus} from '../types';

class AuthController {
	private authApi: AuthApi;
	private store: Store;

	constructor() {
		this.authApi = new AuthApi();
		this.store = new Store();
	}

	async signIn(loginPageData: any) {

		if (onSubmitValidation(loginPageData.formValues, loginPageData.children)) {
			await this.authApi.signIn(loginPageData.formValues);
			const state = this.store.getState();
			if (state.auth === AuthStatus.Ok) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

}

export default AuthController;