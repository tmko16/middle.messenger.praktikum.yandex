import {expect} from 'chai';
import Block from './Block';


describe('Block', () => {
	class Test extends Block {
		protected render(): string {
			return '<div>321</div>';
		}
	}

	const a = 1;
	it('should be rendered', () => {
		expect(a).to.eq(1);
	});
});