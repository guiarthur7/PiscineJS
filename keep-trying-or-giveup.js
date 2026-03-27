export function retry(count, callback) {
	return async function (...args) {
		let lastError;
		for (let attempt = 0; attempt <= count; attempt++) {
			try {
				return await callback(...args);
			} catch (err) {
				lastError = err;
			}
		}
		throw lastError;
	};
}

export function timeout(delay, callback) {
	return async function (...args) {
		return Promise.race([
			callback(...args),
			new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), delay))
		]);
	};
}