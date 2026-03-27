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
	if (json && typeof json === 'object') {
		if (Object.prototype.hasOwnProperty.call(json, 'error')) {
			throw new Error(json.error);
		}
		if (Object.prototype.hasOwnProperty.call(json, 'data')) {
			return json.data;
		}
	}
	return json;
}
