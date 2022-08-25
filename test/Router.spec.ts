import {assert} from 'chai';
import {Router} from '../src/core/Router';
import {LoginPage} from '../src/pages/login/loginPage';
import Block from '../src/core/Block';

describe('Router', function () {
	it('Must be defined', function () {
		const router = new Router();
		assert.exists(router);
	});

	it('Empty routes on init', function() {
		const router = new Router();
		router.use('signin', LoginPage as unknown as Block)
		const rl = router.getRoutes();
		assert.lengthOf(rl, 0, 'Routes are epmty');
	});
});