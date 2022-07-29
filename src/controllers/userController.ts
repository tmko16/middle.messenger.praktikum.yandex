import LoginAPI from '../api/loginAPI';
import {SignUpProps} from '../types';
import RegistrationAPI from '../api/registrationAPI';

class UserController {
	public signUp(data: SignUpProps) {
		RegistrationAPI.signUp(data).then(data => {
			console.log('=>(userController.ts:10) data', data);
		});
	}

}
export default new UserController();