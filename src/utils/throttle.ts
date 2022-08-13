const throttle = (fn: any, delay = 3000) => {
	let timeout = false;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return (...rest) => {
		if (!timeout) {
			timeout = true;
			fn.apply(this, rest);
			setTimeout(() => {
				timeout = false;
			}, delay);
		}
	};
};

export default throttle;