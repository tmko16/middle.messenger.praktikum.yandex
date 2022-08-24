import {expect} from 'chai';
import Block from './Block';


describe('Block', () => {
	class Test extends Block {
		protected render(): string {
			return '<div>321</div>';
		}
	}
	const ab = new Test();
	it('should be rendered', () => {
		expect(ab).to.eq(1);
	});
});