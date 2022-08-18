import Block from '../../core/Block';

import './profileInput.less';

type FormInputProps = {
    label: string,
    type: string,
    name: string,
    placeholder: string
    validation?: (value: string) => string | undefined
    isEdit: boolean,
	value?: string
}

export class ProfileInput extends Block {
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
		this.value = props.value;
	}

	protected render(): string {
		//language=hbs
		return `
            <div class="input-field ${this.props.isEdit ? '' : 'input-field_disabled'}">
                <div class="input-field__wrapper">
                    <div class="input-field__label">
                        {{label }}
                    </div>
                    <input class="input-field__input" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}" name="{{ name }}"
                    />
                </div>
                <div class="input-field__error-msg">
                    ${this.errors ? this.errors.toString() : ''}
                </div>
            </div>

        `;
	}
}