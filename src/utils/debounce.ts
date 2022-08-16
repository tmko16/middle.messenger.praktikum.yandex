export function debounce(func:any, timeout = 3000){
	let timer:any = undefined;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return (...args) => {
		if (!timer) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			func.apply(args[0]);
		}
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = undefined;
		}, timeout);
	};
}

