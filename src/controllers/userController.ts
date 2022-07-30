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

		console.log('=>(userController.ts:13) data', data);
		RegistrationAPI.signUp(data).then(response => {
			this.store.set('test', 213);
			this.store.set('user.signup' , response);
		});
	}

}
export default new UserController(store);