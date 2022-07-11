import Block from "../../core/Block";

import './formInput.less'

type FormInputProps = {
    label: string,
    type: string,
    name: string
}
export class FormInput extends Block {
    constructor(props: FormInputProps) {
        super(props);
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="form-input">
                <div class="form-input__label">
                    {{ label }}
                </div>
                <input type="{{ type }}" name="{{ name }}" class="form-input__input"></input>
            </div>

        `
    }
}