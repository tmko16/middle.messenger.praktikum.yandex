enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
}

type Options = {
	method: METHOD
	data?: Record<string, any>
	headers?: Record<string, string>
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

export default class HTTPTransport {
	private static _instance: HTTPTransport | null = null;
	private baseUrl: string;

	constructor(url: string) {
		this.baseUrl = url;
		if (HTTPTransport._instance) {
			return HTTPTransport._instance;
		}
		HTTPTransport._instance = this;
	}


	get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
		return this.request(url, {...options, method: METHOD.GET});
	}

	post(url: string, options: OptionsWithoutMethod): Promise<XMLHttpRequest> {

		console.log('=>(HTTPTransport.ts:35) url', url);

		console.log('=>(HTTPTransport.ts:37) options', options);
		return this.request(url, {...options, method: METHOD.POST});
	}

	put(url: string, options: OptionsWithoutMethod): Promise<XMLHttpRequest> {
		return this.request(url, {...options, method: METHOD.PUT});
	}

	delete(url: string, options: OptionsWithoutMethod): Promise<XMLHttpRequest> {
		return this.request(url, {...options, method: METHOD.DELETE});
	}

	private queryStringify(data: Record<string, any>) {
		const keys = Object.keys(data);
		return keys.reduce((result, key, index) => {
			return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
		}, '?');
	}

	request(url: string, options: Options = {method: METHOD.GET}): Promise<XMLHttpRequest> {
		const fullUrl = this.baseUrl + url;
		const {headers = {}, method, data} = options;

		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			console.log('=>(HTTPTransport.ts:63) data', data);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			console.log('=>(HTTPTransport.ts:63) this.queryStringify(data)', this.queryStringify(data));
			xhr.open(
				method,
				method === METHOD.GET && data
					? `${fullUrl}${this.queryStringify(data)}`
					: fullUrl,
			);

			Object.keys(headers).forEach((key) => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = function () {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.ontimeout = reject;

			if (method === METHOD.GET || !data) {
				xhr.send();
			} else {
				xhr.send(this.queryStringify(data).substring(1) as XMLHttpRequestBodyInit);
			}
		});
	}
}