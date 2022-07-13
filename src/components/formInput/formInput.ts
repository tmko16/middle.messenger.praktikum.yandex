import Block from '../../core/Block';

import './formInput.less';

type FormInputProps = {
    label: string,
    type: string,
    name: string,
    validation?: (value: string) => string | undefined
}

export class FormInput extends Block {
	private value: string | undefined = '';

	constructor(props: FormInputProps) {
		super({
			...props, events: {
				change: (e: Event) => {
					this.value = (e.target as HTMLInputElement).value;
					this.setProps({
						value: this.value
					});
				},
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				focus: () => {
				},
				blur: () => {
					if (props.validation && this.value) {
						this.errors = props.validation(this.value);
						this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
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
                    <input type="{{ type }}" name="{{ name }}" value="{{value}}"
                           class="form-input__input"/>
                </div>
                <div class="form-input__error-msg">
                    ${this.errors ? this.errors.toString() : ''}
                </div>
            </div>

        `;
	}
}