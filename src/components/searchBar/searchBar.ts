import Block from "../../core/Block";
import './searchBar.less';
export class SearchBar extends Block {
    protected render() {
        //language=hbs
        return `
            <input class="search-bar" type="search" name="search"   placeholder="Поиск">
        `
    }
}