import {assert, expect} from 'chai';
import Button from '../components/button';


describe('Block', () => {
	const block = new Button({'text': 'Кнопка'});
	it('Should exist', () => {
		assert.exists(block);
	});
	it('Should create instance of component with props ', () => {
		expect(block.getProps().text).to.eq('Кнопка');
	});
	it('Should set new prop', () => {
		block.setProps({
			text: 'Жми меня до конца!',
		});
		expect(block.getProps().text).to.eq('Жми меня до конца!');
	});
	it('Should have btn class', () => {
		expect(block.element?.className).to.eq('btn ');
	});

});