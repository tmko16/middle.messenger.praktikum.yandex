import Block from "../../core/Block";

import './profileInput.less'

type FormInputProps = {
    label: string,
    type: string,
    name: string,
    value: string
}

export class ProfileInput extends Block {
    constructor(props: FormInputProps) {
        super(props);
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="input-field">
                <div class="input-field__label">
                    {{label }}
                </div>
                <input class="input-field__input" type="{{type}}" name="{{ name }}" placeholder="{{ value }}"/>
            </div>

        `
    }
}