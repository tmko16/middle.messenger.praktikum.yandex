export function debounce(func: any, timeout = 2000){
	let timer: number;
	return (...args: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			func.apply(this, args); }, timeout);
	};
}