import {BaseAPI} from '../core/BaseAPI';
import {SignUpProps} from '../types';
import {BASE_URL} from '../enums';
import HTTPTransport from '../core/HTTPTransport';

// const regApiInstance = new HTTPTransport(BASE_URL);
const regApiInstance = new HTTPTransport(BASE_URL);

class RegistrationAPI extends BaseAPI {
	signUp(data: SignUpProps) {
		return regApiInstance.post('/auth/signup', {data: data});
	}
}

export default new RegistrationAPI();