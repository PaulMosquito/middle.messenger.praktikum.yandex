export default class HTTPTransport {
	static METHOD = {
		GET: 'GET',
		POST: 'POST',
		PUT: 'PUT',
		DELETE: 'DELETE'
	};
	static queryStringify(data: Record<string, any>) {
		return Object.entries(data).map(([ k, v ]) => `${k}=${v}`).join('&');
	}

	get(url: string, options: { headers: Record<string, string>, timeout: number, data: Record<string, any>  }) {
		return this.request(url, HTTPTransport.METHOD.GET, { ...options }, options.timeout);
	}

	post(url: string, options: { headers: Record<string, string>, timeout: number, data: Record<string, any>  }) {
		return this.request(url, HTTPTransport.METHOD.POST, { ...options }, options.timeout);
	}

	delete(url: string, options: { headers: Record<string, string>, timeout: number, data: Record<string, any>  }) {
		return this.request(url, HTTPTransport.METHOD.DELETE, { ...options }, options.timeout);
	}

	put(url: string, options: { headers: Record<string, string>, timeout: number, data: Record<string, any>  }) {
		return this.request(url, HTTPTransport.METHOD.PUT, { ...options }, options.timeout);
	}

	request(url: string, method: string, { data, headers }: { headers: Record<string, string>, data: Record<string, any>  }, timeout = 5000) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			if (method === HTTPTransport.METHOD.GET && data) {
				xhr.open(method, `${url}?${HTTPTransport.queryStringify(data)}`);
			} else {
				xhr.open(method, url);
			}
			if (headers) {
				Object.entries(headers).forEach(([ key, value ]) => {
					xhr.setRequestHeader(key, value);
				});
			}

			xhr.onload = function() {
				resolve(xhr);
			};

			const handleError = (err: ProgressEvent<EventTarget>):void => {
				reject(err);
			};

			xhr.timeout = timeout;
			xhr.onabort = handleError;
			xhr.onerror = handleError;
			xhr.ontimeout = handleError;

			if (method === HTTPTransport.METHOD.GET || !data ) {
				xhr.send();
			} else {
				xhr.send(JSON.stringify(data));
			}
		});
	}
}