import {assert} from 'chai';
import {Router} from '../src/core/Router';
import Block from '../src/core/Block';
import Messenger from '../src/components/messenger';

describe('Router', function () {
	it('Must be defined', function () {
		const router = new Router();
		assert.exists(router);
	});

	it('Empty routes on init', function() {
		const router = new Router();
		const rl = router.getRoutes();
		assert.lengthOf(rl, 0, 'Routes are epmty');
	});
});