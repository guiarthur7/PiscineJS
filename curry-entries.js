function defaultCurry(fnOrObj) {
	return function(obj2) {
		const obj1 = fnOrObj;
		const res = Object.assign({}, obj1);
		for (const key in obj2) {
			if (Object.prototype.hasOwnProperty.call(obj2, key)) {
				res[key] = obj2[key];
			}
		}
		return res;
	};
}

function mapCurry(mapFn) {
	return function(obj) {
		const res = {};
		for (const [k, v] of Object.entries(obj)) {
			const mapped = mapFn([k, v]);
			res[mapped[0]] = mapped[1];
		}
		return res;
	};
}

function reduceCurry(reduceFn) {
	return function(obj, initial) {
		let acc = initial;
		const entries = Object.entries(obj);
		let i = 0;
		if (arguments.length < 2) {
			if (entries.length === 0) throw new TypeError('Reduce of empty object with no initial value');
			acc = entries[0];
			i = 1;
		}
		for (; i < entries.length; i++) {
			acc = reduceFn(acc, entries[i]);
		}
		return acc;
	};
}

function filterCurry(filterFn) {
	return function(obj) {
		const res = {};
		for (const [k, v] of Object.entries(obj)) {
			if (filterFn([k, v])) res[k] = v;
		}
		return res;
	};
}

function reduceScore(personnel) {
	const reducer = reduceCurry((acc, [k, v]) => acc + (v.pilotingScore + v.shootingScore));
	const force = filterCurry(([k, v]) => !!v.isForceUser)(personnel);
	return reducer(force, 0);
}

function filterForce(personnel) {
	return filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnel);
}

function mapAverage(personnel) {
	return mapCurry(([k, v]) => {
		const avg = (v.pilotingScore + v.shootingScore) / 2;
		const newVal = Object.assign({}, v, { averageScore: avg });
		return [k, newVal];
	})(personnel);
}