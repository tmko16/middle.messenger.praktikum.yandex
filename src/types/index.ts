export type Indexed<T = unknown> = {
	[key in string]: T
}
export type PlainObject<T = any> = {
	[k in string]: T;
};


// Swagger

export interface SignUpProps {
	first_name: 'string',
	second_name: 'string',
	login: 'string',
	email: 'string',
	password: 'string',
	phone: 'string'
}

export enum AuthStatus {
	Ok = 'OK',
	NotOk =  'NOT OK'
}

export enum Authorised {
	Y='1',
	N='0'
}
