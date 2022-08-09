import HTTPTransport from '../core/HTTPTransport';
import {BASE_URL} from '../enums';
import Store, {StoreEvents} from '../core/Store';

class AuthApi {
	private api: HTTPTransport;
	private store: Store;
	constructor() {
		this.api = new HTTPTransport(BASE_URL);
		this.store = new Store();
	}

	async signIn(formValues: any) {
		const response = await this.api.post('/auth/signin', {data: formValues, headers: {'Content-Type': 'application/json'}});
		this.store.set('auth', response.response);
		this.store.emit(StoreEvents.Updated);
	}
	async signUp(formValues: any) {
		const response = await this.api.post('/auth/signup', {data: formValues, headers: {'Content-Type': 'application/json'}});
		this.store.set('registrationData', JSON.parse(response.response));
		this.store.emit(StoreEvents.Updated);
	}
	async getUser() {
		const response = await this.api.get('/auth/user', {  headers: {'Content-Type': 'application/json'}});
		this.store.set('userData', JSON.parse(response.response));
		this.store.emit(StoreEvents.Updated);
	}
}

export default AuthApi;