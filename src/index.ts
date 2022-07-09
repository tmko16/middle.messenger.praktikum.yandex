import {Button} from "./components/Button/button";
import renderDOM from "./core/renderDOM";
// Index ts - точка входа
document.addEventListener("DOMContentLoaded", () => {
     const button = new Button({
         label: 'Нажми меня',
         href: 'ya.ru'
     })

    renderDOM(button);
     setTimeout(()=> {
         button.setProps({
             label: 'Yolo',
             href: 'test'
         })
     }, 3000)
});