export async function series(tasks) {
	const results = [];
	for (const fn of tasks) {
		results.push(await fn());
	}
	return results;
}
