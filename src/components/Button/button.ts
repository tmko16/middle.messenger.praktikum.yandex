import Block from "../../core/Block";

type ButtonProps = {
    label: string,
    href: string

}
export class Button extends Block {
    constructor(props: ButtonProps) {
        super('button', props);
    }

    render(): string {
        return this.props.label
    }
}