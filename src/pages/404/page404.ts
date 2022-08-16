import Block from '../../core/Block';
import './404.less';
import Link from '../../components/link';

export class Page404 extends Block {
	constructor() {
		super();
		this.setChildren({
			backLink: new Link({text: 'Назад к чатам', to: '/messenger'})
		});
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="page-404">
                <div class="page-404__content">
                    <span class="page-404__title">404</span>
                    <span class="page-404__subtitle">Не туда попали</span>
                    <div class="page-404__msg">
                        {{{backLink}}}
                    </div>
                </div>
            </div>
        `;
	}
}