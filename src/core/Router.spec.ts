import {assert, expect} from 'chai';
import {Router} from './Router';
import RegistrationPage from '../pages/registration';
import Block from './Block';

describe('Router', function () {
	const router = new Router();
	it('Should be defined', function () {
		assert.exists(router);
	});

	it('Empty routes on init', function() {
		const routerLength = router.getRoutes();
		assert.lengthOf(routerLength, 0, 'Routes are epmty');
	});

	it('Should change routes', function() {
		router.use('/registration', RegistrationPage as unknown as Block);
		const routerLength = router.getRoutes();
		assert.lengthOf(routerLength, 1, 'Routes are epmty');
	});
	it('Should change route path', function() {
		router.use('/registration', RegistrationPage as unknown as Block);
		router.go('/registration');
		const currentRoute  = router.getCurrentRoute();
		router.start();
		expect(currentRoute?.getPathName()).to.eq('/registration');
	});
});