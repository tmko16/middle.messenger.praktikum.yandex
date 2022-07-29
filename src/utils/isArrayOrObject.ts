import {PlainObject} from '../types';
import isPlainObject from './isPlainObject';
import isArray from './isArray';

export default function isArrayOrObject(value: unknown): value is [] | PlainObject {
	return isPlainObject(value) || isArray(value);
}