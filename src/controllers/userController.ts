import {Indexed, SignUpProps} from '../types';
import RegistrationAPI from '../api/registrationAPI';
import store, {Store} from '../core/Store';


class UserController {
	private _apiCaller: RegistrationAPI;
	private _globalStore: Store;
	constructor() {
		this._globalStore = store;
		this._apiCaller = new RegistrationAPI();
	}


	public signUp(data: SignUpProps) {

		this._apiCaller.signUp(data).then(response => {
			console.log(response.response);
			this._globalStore.set('user.auth', response.response);
		});


	}

}

export default UserController;