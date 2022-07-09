import {Button} from "./components/Button/button";
import renderDOM from "./core/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
     const button = new Button({
         label: 'Нажми меня',
         href: 'ya.ru'
     })

    renderDOM(button);
});