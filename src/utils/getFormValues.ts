import Block from "../core/Block";
import EventBus from "../core/EventBus";
import {onSubmitValidation} from "./validators";

export function getFormValues(this: any) {
    const fields = document.querySelectorAll('input')
    fields.forEach(field => {
        this.formValues[field.name] = field.value
    })
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
}