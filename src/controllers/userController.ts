import LoginAPI from '../api/loginAPI';
import {Indexed, SignUpProps} from '../types';
import RegistrationAPI from '../api/registrationAPI';
import store, {Store} from '../core/Store';
class UserController {
	private store;
	constructor(store: Store) {
		this.store =  store;
	}

	public signUp(data: SignUpProps) {
		RegistrationAPI.signUp(data).then(data => {
			this.store.set('test', 213);
		});
	}

}
export default new UserController(store);