export function all(obj) {
	const entries = Object.entries(obj);
	// Utilise toujours la Promise globale native
	return Promise.all.call(globalThis.Promise, entries.map(async ([k, v]) => [k, await v]))
		.then(Object.fromEntries);
}
