import Block from "../core/Block";
import EventBus from "../core/EventBus";

const validationPatterns = {
    login: /^(?!\d+$)[A-Za-z-_0-9]{3,20}$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
    phone: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/,
    email: /^[^\s@]+@[^\s@]+\.[\S]{2,}$/,
    name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
    title: /^.+$/,
    message: /.+/,
}

function inputValidation(value: string | number, pattern: RegExp) {
    const regexp = new RegExp(pattern)
    if (!value) {
        return false
    }
    return regexp.test(String(value))
}

export function loginValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    if (!isValid) {
        return 'Некорректные данные'
    }
}

export function phoneValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    if (!isValid) {
        return 'phone некорректный'
    }
}

export function emailValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    if (!isValid) {
        return 'email некорректный'
    }
}

export function nameValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    if (!isValid) {
        return 'name некорректный'
    }
}

export function passwordValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    if (!isValid) {
        return 'Пароль некорректный'
    }
}

export function titleValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    if (!isValid) {
        return 'title некорректный'
    }
}

export function messageValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    if (!isValid) {
        return 'title некорректный'
    }
}

export const formValidators = {
    login: loginValidation,
    password: passwordValidation
}

export function onSubmitValidation() {
    const that = this
    console.log(that)
    const fields = document.querySelectorAll('input')
    fields.forEach(field => {
        const name = field.name
        const value = (document.querySelector(`input[name=${name}]`) as HTMLInputElement).value
        for (let key in formValidators) {
            if (key === name) {
                const validationResult = (formValidators[key as keyof {}] as Function)(value)
                that.children[key].errors = validationResult
                that.children[key].eventBus().emit(Block.EVENTS.FLOW_RENDER);
            }
        }
    })
    that.eventBus().emit(Block.EVENTS.FLOW_RENDER);
}