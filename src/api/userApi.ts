import HTTPTransport from '../core/HTTPTransport';
import Store, {StoreEvents} from '../core/Store';
import {BASE_URL} from '../enums';

class UserApi {
	private api: HTTPTransport;
	private store: Store;
	constructor() {
		this.api = new HTTPTransport(BASE_URL);
		this.store = new Store();
	}

	async changeProfileData(newProfileData: any) {
		const response = await this.api.put('/user/profile', {data: newProfileData, headers: {'Content-Type': 'application/json'}});
		this.store.set('user.profile.changed', response.response);
		this.store.emit(StoreEvents.Updated);
	}
}

export default UserApi;