import {assert} from 'chai';
import {Router} from '../src/core/Router';

describe('Router', function () {
	it('Must be defined', function () {
		const router = new Router('.app');
		assert.exists(router);
	});
});