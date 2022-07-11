import Block from "../../core/Block";
import './404.less'
export class Page404 extends Block {
    protected render(): string {
        //language=hbs
        return `
            <div class="page-404">
                <div class="page-404__content">
                    <span  class="page-404__title">404</span>
                    <span  class="page-404__subtitle">Не туда попали</span>
                    <a  class="page-404__msg" href="index.hbs"> <span>Назад к чатам</span></a>
                </div>
            </div>
        `
    }
}