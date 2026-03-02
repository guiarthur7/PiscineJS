function arrToSet(arr) {
    return new Set(arr);
}

function arrToStr(arr) {
    return arr.join('');
}

function setToArr(set) {
    return Array.from(set);
}

function setToStr(set) {
    return Array.from(set).join('');
}

function strToArr(str) {
    return Array.from(str);
}

function strToSet(str) {
    return new Set(str);
}

function mapToObj(map) {
    return Object.fromEntries(map);
}

function objToArr(obj) {
    return Object.values(obj);
}

function objToMap(obj) {
    return new Map(Object.entries(obj));
}

function arrToObj(arr) {
    return { ...arr };
}

function strToObj(str) {
    return { ...str };
}

function superTypeOf(value) {
    if (value === null) {
        return 'null';
    }
    if (value === undefined) {
        return 'undefined';
    }
    if (Array.isArray(value)) {
        return 'Array';
    }
    if (value instanceof Set) {
        return 'Set';
    }
    if (value instanceof Map) {
        return 'Map';
    }
    if (typeof value === 'object') {
        return 'Object';
    }
    if (typeof value === 'string') {
        return 'String';
    }
    if (typeof value === 'number') {
        return 'Number';
    }
    if (typeof value === 'boolean') {
        return 'Boolean';
    }
    if (typeof value === 'function') {
        return 'Function';
    }
    return typeof value;
}