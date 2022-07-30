import {BaseAPI} from '../core/BaseAPI';
import {SignUpProps} from '../types';
import {BASE_URL} from '../enums';
import HTTPTransport from '../core/HTTPTransport';

// const regApiInstance = new HTTPTransport(BASE_URL);
const regApiInstance = new HTTPTransport(BASE_URL);

class RegistrationAPI extends BaseAPI {
	signUp(data: SignUpProps) {
		const res =  regApiInstance.post('/auth/signup', {data: data});
		console.log('=>(registrationAPI.ts:13) res', res);
		return res;
	}
}

export default new RegistrationAPI();