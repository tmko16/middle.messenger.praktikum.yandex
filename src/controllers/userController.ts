import {Indexed, SignUpProps} from '../types';
import store, {Store} from '../core/Store';
import UserAPI from '../api/userAPI';


class UserController {
	private _apiCaller: UserAPI;
	private _globalStore: Store;
	constructor() {
		this._globalStore = store;
		this._apiCaller = new UserAPI();
	}


	public signUp(data: SignUpProps) {
		this._apiCaller.signUp(data).then((response) => {
			console.log(response.response);
			this._globalStore.set('user.auth', response.response);
		});
	}
	public signIn(data: any) {
		this._apiCaller.signIn(data).then((response)=> {
			this._globalStore.set('user.id', response.response);
		});
	}

}

export default UserController;