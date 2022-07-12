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
    return regexp.test(String(value))
}

export function loginValidation() {
    const value = arguments[0]
    const isValid = inputValidation(value, validationPatterns.login)
    console.log('valid', isValid)
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