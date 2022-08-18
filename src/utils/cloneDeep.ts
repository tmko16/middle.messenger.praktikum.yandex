export default function cloneDeep<T extends object = object>(obj: T) {
	/**
	 * Обработать массивы и объекты
	 * Скопировать вложенные элементы массивов и свойства объектов
	 */
	const type = Object.prototype.toString.call(obj);  //[object Array]
	if (type !== '[object Array]' && type !== '[object Object]') {
		return obj;
	}
	if(!obj) {
		return obj; // null
	}
	const r = type ===  '[object Array]' ? [] : {};
	for(const i in obj) {
		// eslint-disable-next-line no-prototype-builtins
		if(obj.hasOwnProperty(i)) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			r[i] = cloneDeep(obj[i]);
		}
	}
	return r;
}

