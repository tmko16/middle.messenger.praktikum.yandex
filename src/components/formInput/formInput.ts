import Block from "../../core/Block";

import './formInput.less'

type FormInputProps = {
    label: string,
    type: string,
    name: string,
    onChange?: () => string[]
}

export class FormInput extends Block {
    private errors: string[] = [];

    constructor(props: FormInputProps) {
        super({
            ...props, events: {
                click: () => {
                    if (props.onChange) {
                        const errors = props.onChange()
                        this.errors = errors
                        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
                    }
                }
            }
        });
    }

    protected render(): string {
        console.log(this)
        //language=hbs
        return `
            <div class="form-input">
              
                <div class="form-input__label">
                    {{ label }}
                </div>
                <input type="{{ type }}" name="{{ name }}" class="form-input__input"/>
                <div class="form-input__error-msg">
                    ${this.errors ? this.errors.toString() : ''}
                </div>
            </div>

        `
    }
}