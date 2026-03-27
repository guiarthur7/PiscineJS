export function all(obj) {
	const entries = Object.entries(obj);
	return new Promise((resolve, reject) => {
		let count = entries.length;
		const results = [];
		if (count === 0) return resolve({});
		entries.forEach(([k, v], i) => {
			Promise.resolve(v)
				.then(val => {
					results[i] = [k, val];
					if (--count === 0) resolve(Object.fromEntries(results));
				})
				.catch(reject);
		});
	});
}
