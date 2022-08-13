export function debounce(func:any, timeout = 3000){
	let timer:any;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return (...args) => {
		if (!timer) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			func.apply(this, args);
		}
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = undefined;
		}, timeout);
	};
}
