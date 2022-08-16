import HTTPTransport from '../core/HTTPTransport';
import Store, {StoreEvents} from '../core/Store';
import {BASE_URL} from '../enums';
import {debounce} from '../utils/debounce';

class UserApi {
	private api: HTTPTransport;
	private store: Store;

	constructor() {
		this.api = new HTTPTransport(BASE_URL);
		this.store = new Store();
	}

	async changeProfileData(newProfileData: any) {
		const response = await this.api.put('/user/profile', {
			data: newProfileData,
			headers: {'Content-Type': 'application/json'}
		});
		this.store.set('user.profile.changed', response.response);
		this.store.emit(StoreEvents.Updated);
	}

	async changePassword(credentials: any) {
		const response = await this.api.put('/user/password', {
			data: credentials,
			headers: {'Content-Type': 'application/json'}
		});
		this.store.set('user.profile.changed', response.response);
		this.store.emit(StoreEvents.Updated);
	}

	async searchUser(login: string) {
		const res = await this.api.post('/user/search', {data: {login}, headers: {'Content-Type': 'application/json'}});
		if (res.status === 200) {
			return JSON.parse(res.response);
		}
	}

	async changeAvatar(formData: FormData) {
		const res = await this.api.put('/user/profile/avatar', {
			data: formData
		});
		if (res.status === 200) {
			return JSON.parse(res.response);
		}
	}
}

export default UserApi;