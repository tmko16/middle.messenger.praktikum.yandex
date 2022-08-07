import AuthApi from '../api/authApi';

class AuthController {
	private authApi: AuthApi;
	constructor() {
		this.authApi = new AuthApi();
	}
	signIn(formValues: any) {
		console.log('sign in');
		this.authApi.signIn(formValues);
	}

}

export default AuthController;