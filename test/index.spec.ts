import {expect} from 'chai';


function hello(name: string) {
	return `Hello ${name}`;
}

describe('Typescript + Babel usage suite', () => {
	it('should return string correctly', () => {
		expect(hello('mocha'), 'Hello mocha');
	});
});


/**
 * TODO:
 * Напишите тесты для шаблонизатора,
 * роутера,
 * компонента,
 * модуля отправки запросов.
 */