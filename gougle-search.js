export function queryServers(serverName, q) {
	const url = `/${serverName}?q=${q}`;
	const backupUrl = `/${serverName}_backup?q=${q}`;
	return Promise.race([
		getJSON(url),
		getJSON(backupUrl)
	]);
}

export async function gougleSearch(q) {
	const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 80));
	const search = Promise.all([
		queryServers('web', q),
		queryServers('image', q),
		queryServers('video', q)
	]).then(([web, image, video]) => ({ web, image, video }));
	return Promise.race([search, timeout]);
}
