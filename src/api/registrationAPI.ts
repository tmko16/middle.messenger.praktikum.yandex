import {BaseAPI} from '../core/BaseAPI';
import {SignUpProps} from '../types';
import {BASE_URL} from '../enums';
import HTTPTransport from '../core/HTTPTransport';

// const regApiInstance = new HTTPTransport(BASE_URL);
// const regApiInstance = new HTTPTransport(BASE_URL);

class RegistrationAPI extends BaseAPI {
	private _regApiInstance: HTTPTransport;
	constructor() {
		super();
		this._regApiInstance = new HTTPTransport(BASE_URL);
	}

	signUp(data: SignUpProps) {

		console.log('=>(registrationAPI.ts:18) data', data);
		return this._regApiInstance.post('/auth/signup', {data: data});
	}
}

export default RegistrationAPI;