import Block from '../core/Block';

const validationPatterns = {
	login: /^(?!\d+$)[A-Za-z-_0-9]{3,20}$/,
	password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,40}$/,
	phone: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
	email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
	name: /^[A-ZА-ЯЁ][а-яА-ЯёЁa-zA-Z-]+$/,
	message: /.+/,
};

function inputValidation(value: string | number, pattern: RegExp) {
	const regexp = new RegExp(pattern);
	if (!value) {
		return false;
	}
	return regexp.test(String(value));
}

export function loginValidation() {
	const value = arguments[0];
	const isValid = inputValidation(value, validationPatterns.login);
	if (!isValid) {
		return 'Некорректный логин';
	}
}

export function phoneValidation() {
	const value = arguments[0];
	const isValid = inputValidation(value, validationPatterns.phone);
	if (!isValid) {
		return 'Телефон некорректный';
	} else {
		return undefined;
	}
}

export function emailValidation() {
	const value = arguments[0];
	const isValid = inputValidation(value, validationPatterns.email);
	if (!isValid) {
		return 'Email некорректный';
	}
}

export function nameValidation() {
	const value = arguments[0];
	const isValid = inputValidation(value, validationPatterns.name);
	if (!isValid) {
		return 'Некорректное значение';
	}
}

export function passwordValidation() {
	const value = arguments[0];
	const isValid = inputValidation(value, validationPatterns.password);
	if (!isValid) {
		return 'Пароль некорректный';
	}
}

export function messageValidation() {
	const value = arguments[0];
	const isValid = inputValidation(value, validationPatterns.message);
	if (!isValid) {
		return 'Сообщение не может быть пустым';
	}
}

export const formValidators = {
	login: loginValidation,
	password: passwordValidation,
	newPassword: passwordValidation,
	confirmPassword: passwordValidation,
	oldPassword: passwordValidation,
	phone: phoneValidation,
	email: emailValidation,
	message: messageValidation,
	first_name: nameValidation,
	second_name: nameValidation,
};

export function onSubmitValidation(formData: Record<string, string | number>, children: Record<string, Block>) {

	for (const formDataKey in formData) {
		for (const key in formValidators) {
			if (key === formDataKey) {
				// eslint-disable-next-line @typescript-eslint/ban-types
				const errors = (formValidators[key as keyof {}] as Function)(formData[formDataKey]);
				children[key].errors = errors;
				children[key].eventBus().emit(Block.EVENTS.FLOW_RENDER);
			}
		}
	}
}