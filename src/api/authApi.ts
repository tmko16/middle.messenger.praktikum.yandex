import HTTPTransport from '../core/HTTPTransport';
import {BASE_URL} from '../enums';

class AuthApi {
	private api: HTTPTransport;
	constructor() {
		this.api = new HTTPTransport(BASE_URL);
	}

	signIn(formValues: any) {
		console.log('=>(authApi.ts:12) formValues', formValues);
		this.api.post('/auth/signin', {data: formValues, headers: {'Content-Type': 'application/json'}}).then(response => {
			console.log('=>(authApi.ts:14) response', response);
		});
	}
}

export default AuthApi;