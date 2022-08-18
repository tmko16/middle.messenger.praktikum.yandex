import AuthApi from '../api/authApi';
import Store from '../core/Store';
import {onSubmitValidation} from '../utils/validators';
import UserApi from '../api/userApi';
import {debounce} from '../utils/debounce';
import throttle from '../utils/throttle';

export class UserController {
	private userApi: UserApi;
	private store: Store;

	constructor() {
		this.userApi = new UserApi();
		this.store = new Store();
	}

	async changeProfileData(changeProfileData: any) {
		if (onSubmitValidation(changeProfileData.formValues, changeProfileData.children)) {
			await this.userApi.changeProfileData(changeProfileData.formValues);
			const state = this.store.getState();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (state.user.profile.changed) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	async changePassword(credentials: any) {
		if (onSubmitValidation(credentials.formValues, credentials.children)) {
			await this.userApi.changePassword(credentials.formValues);
			const state = this.store.getState();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			if (state.user.profile.changed) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	async searchUser(login: string) {
		return this.userApi.searchUser(login);
	}
	async changeAvatar(formData: FormData) {
		return this.userApi.changeAvatar(formData);

	}

}