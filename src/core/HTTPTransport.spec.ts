import {assert, expect} from 'chai';
import HTTPTransport from './HTTPTransport';
import {BASE_URL} from '../enums';


describe('HTTPTransport', () => {
	const http = new HTTPTransport(BASE_URL);
	it('Should exist', () => {
		assert.exists(http);
	});
	it('Get request',  (done) => {
		http.get('https://jsonplaceholder.typicode.com/todos/1').then(result => {
			console.log(result)
			done()
		}).catch(() => {
			done(new Error('Не удалось совершить запрос.'));
		})
	});
});