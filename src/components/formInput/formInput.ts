import Block from "../../core/Block";

import './formInput.less'

type FormInputProps = {
    label: string,
    type: string,
    name: string,
    onChange?: any
}

export class FormInput extends Block {
    private errors: string[] = [];
    private value: string = '';

    constructor(props: FormInputProps) {
        
        super({
            ...props, events: {
                change: () => {
                    if (props.onChange) {
                        const value = (document.querySelector(`input[name=${props.name}]`) as HTMLInputElement).value
                        this.value = value
                        const errors = props.onChange(value)
                        this.errors = errors
                        if (value) {
                            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
                        }
                    }
                }
            }
        });


    }

    

    protected render(): string {
        //language=hbs
        return `
            <div class="form-input">
                <div class="form-input__wrapper">
                    <div class="form-input__label">
                        {{ label }}
                    </div>
                    <input type="{{ type }}" name="{{ name }}" value="${this.value ? this.value : ''}" class="form-input__input"/>
                </div>
                <div class="form-input__error-msg">
                    ${this.errors ? this.errors.toString() : ''}
                </div>
            </div>

        `
    }
}