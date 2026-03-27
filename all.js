export function all(obj) {
	const entries = Object.entries(obj);
	return Promise.all(entries.map(async ([k, v]) => [k, await v]))
		.then(Object.fromEntries);
}
