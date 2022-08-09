import AuthApi from '../api/authApi';
import Store from '../core/Store';

class AuthController {
	private authApi: AuthApi;
	private store: Store;
	constructor() {
		this.authApi = new AuthApi();
		this.store = new Store();
	}
	async signIn(formValues: any) {
		await this.authApi.signIn(formValues);
		const auth = this.store.getState();
		console.log('=>(authController.ts:15) auth', auth);
		return auth;
	}

}

export default AuthController;