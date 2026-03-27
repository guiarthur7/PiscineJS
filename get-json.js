export async function getJSON(path, params) {
	let url = path;
	if (params && typeof params === 'object') {
		const search = new URLSearchParams(params).toString();
		if (search) url += (url.includes('?') ? '&' : '?') + search;
	}
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const json = await response.json();
	if ('data' in json) return json.data;
	if (Object.prototype.hasOwnProperty.call(json, 'error')) {
		if (json.error instanceof Error) throw json.error;
		throw new Error(json.error);
	}
	return json;
}
