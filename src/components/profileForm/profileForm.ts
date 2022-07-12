import Block from "../../core/Block";
import './profileForm.less'
import ProfileInput from "../profileInput";
export class ProfileForm extends Block {


    constructor() {
        const fields = {
            email: new ProfileInput({label: "Почта", name: "email", type: "text", value: "akira-must-die@yandex.ru"}),
            login: new ProfileInput({label: "Логин", name: "login", type: "text", value: "setCadena"}),
            firstName: new ProfileInput({label: "Имя", name: "first_name", type: "text", value: "Сётару"}),
            secondName: new ProfileInput({label: "Фамилия", name: "second_name", type: "text", value: "Канеда"}),
            displayName: new ProfileInput({label: "Имя в чате", name: "display_name", type: "text", value: "Канеда С."}),
            phone: new ProfileInput({label: "Телефон", name: "phone", type: "text", value: "89222229929"}),
        }
        super({...fields});
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="profile-form">
                {{{email}}}
                {{{login}}}
                {{{firstName}}}
                {{{secondName}}}
                {{{displayName}}}
                {{{phone}}}
            </div>
        `
    }
}