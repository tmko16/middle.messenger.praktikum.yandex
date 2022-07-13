import Block from "../../core/Block";

import './profileInput.less'

type FormInputProps = {
    label: string,
    type: string,
    name: string,
    value: string
    onChange?: any
}

export class ProfileInput extends Block {
    private value: string = '';

    constructor(props: FormInputProps) {
        super({
            ...props, events: {
                change: (e: Event) => {
                    this.value = (e.target as HTMLInputElement).value
                },
                focus: () => {
                    // if (props.onChange) {
                    //     const value = (document.querySelector(`input[name=${props.name}]`) as HTMLInputElement).value
                    //     console.log(value)
                    //     this.value = value
                    //     this.errors = props.onChange(value)
                    //     if (value) {
                    //         this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
                    //     }
                    // }
                },
                blur: () => {

                }
            }
        });
    }

    protected render(): string {
        //language=hbs
        return `
            <div class="input-field">
                <div class="input-field__wrapper">
                    <div class="input-field__label">
                        {{label }}
                    </div>
                    <input class="input-field__input" type="{{type}}" value="{{value}}" name="{{ name }}"
                    />
                </div>
                <div class="input-field__error-msg">
                    ${this.errors ? this.errors.toString() : ''}
                </div>
            </div>

        `
    }
}