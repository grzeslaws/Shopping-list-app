import { getHeadersAuthorization, getTokenFromLocalStorage } from "./storage";

type Methods = "get" | "post" | "put" | "delete" | null;

export const http = async (
	url: string,
	method: Methods = "get",
	data: {} | null = null
) => {
	let options: any = {
		method,
		headers: {
			"Content-Type": "application/json"
		}
	};

	if (getTokenFromLocalStorage()) {
		options.headers = Object.assign(options.headers, {
			Authorization: getHeadersAuthorization()
		});
	}

	if (data) {
		options = {
			...options,
			body: JSON.stringify(data),
			method
		};
	}

	try {
		const fetchData = await fetch(url, options);
		if (fetchData.status === 204) {
			return fetchData;
		}
		return fetchData.json();
	} catch (e) {
		throw { message: "Network error", status: 500 };
	}
};
