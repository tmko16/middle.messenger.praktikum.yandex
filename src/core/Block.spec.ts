import {assert} from 'chai';
import {Router} from './Router';
import Block from './Block';
import Messenger from '../components/messenger';

describe('Block', function () {
	it('Must be defined', function () {
		type y = {
			a: string
		}
		let a:y;
		const b = new Block(); // ЕСЛИ импортирую Блок - все падает, иначе - все ок.
		const router = 'new Block()';
	});
});