export function all(obj) {
	const entries = Object.entries(obj);
	const P = (typeof Promise === 'function' ? Promise : globalThis.Promise);
	return P.all(entries.map(async ([k, v]) => [k, await v]))
		.then(Object.fromEntries);
}
