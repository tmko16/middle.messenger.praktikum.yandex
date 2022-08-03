import {BaseAPI} from '../core/BaseAPI';
import {SignUpProps} from '../types';
import {BASE_URL} from '../enums';
import HTTPTransport from '../core/HTTPTransport';

// const regApiInstance = new HTTPTransport(BASE_URL);
// const regApiInstance = new HTTPTransport(BASE_URL);

class UserAPI extends BaseAPI {
	private _api: HTTPTransport;

	constructor() {
		super();
		this._api = new HTTPTransport(BASE_URL);
	}

	signUp(data: SignUpProps) {
		return this._api.post('/auth/signup', {
			data: data, headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	}
	signIn(data: any) {
		return this._api.post('/auth/signin', {
			data: data, headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	}
}

export default UserAPI;