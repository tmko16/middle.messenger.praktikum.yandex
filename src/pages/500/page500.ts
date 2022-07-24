import Block from '../../core/Block';
import './500.less';

export class Page500 extends Block {
	protected render(): string {
		//language=hbs
		return `
            <div class="page-500">
                <div class="page-500__content">
                    <span class="page-500__title"><h1>500</h1></span>
                    <span class="page-500__subtitle">Мы уже фиксим</span>
                    <a class="page-500__msg" href="/"> <span>Назад к чатам</span></a>
                </div>
            </div>
        `;
	}
}