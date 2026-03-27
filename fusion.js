function fusion(obj1, obj2) {
    function isPlainObject(v) {
        return Object.prototype.toString.call(v) === '[object Object]';
    }

    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        return obj1.concat(obj2);
    }

    if (typeof obj1 !== typeof obj2 || Array.isArray(obj1) !== Array.isArray(obj2)) {
        return obj2;
    }

    if (isPlainObject(obj1) && isPlainObject(obj2)) {
        for (const key in obj2) {
            if (!Object.prototype.hasOwnProperty.call(obj2, key)) continue;

            const hasKey1 = Object.prototype.hasOwnProperty.call(obj1, key);
            if (!hasKey1) {
                obj1[key] = obj2[key];
                continue;
            }

            const v1 = obj1[key];
            const v2 = obj2[key];

            if (Array.isArray(v1) && Array.isArray(v2)) {
                for (let i = 0; i < v2.length; i++) {
                    v1.push(v2[i]);
                }
                obj1[key] = v1;
            } else if (typeof v1 === 'string' && typeof v2 === 'string') {
                obj1[key] = v1 + ' ' + v2;
            } else if (typeof v1 === 'number' && typeof v2 === 'number') {
                obj1[key] = v1 + v2;
            } else if (isPlainObject(v1) && isPlainObject(v2)) {
                obj1[key] = fusion(v1, v2);
            } else {
                obj1[key] = v2;
            }
        }
        return obj1;
    }
    return obj2;
}

console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
