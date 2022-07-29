import Base = Mocha.reporters.Base;

const loginAPIInstance = new HTTPTransport('api/v1/chats');

export default class LoginAPI extends Base {
	auth(login: string, password: string) {
		return loginAPIInstance.post('/auth/signin', {
			data: {
				login: login,
				password: password
			}
		});
	}
}

