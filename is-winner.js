export async function isWinner(country) {
	try {
		const info = await db.getWinner(country);
		let results;
		try {
			results = await db.getResults(info.id);
		} catch {
			return `${info.name} never was a winner`;
		}
		if (info.continent !== 'Europe') {
			return `${info.name} is not what we are looking for because of the continent`;
		}
		if (results.length < 3) {
			return `${info.name} is not what we are looking for because of the number of times it was champion`;
		}
		const years = results.map(r => r.year).join(', ');
		const scores = results.map(r => r.score).join(', ');
		return `${info.name} won the FIFA World Cup in ${years} winning by ${scores}`;
	} catch {
		return `${country} never was a winner`;
	}
}
