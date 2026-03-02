is.num = function(n) {
    return typeof n === 'number';
}

is.nan = function(n) {
    return isNaN(n);
}

is.str = function(s) {
    return typeof s === 'string';
}

is.bool = function(b) {
    return typeof b === 'boolean';
}

is.undef = function(value) {
    return value === undefined;
}

is.def = function(value) {
    return value !== undefined;
}

is.arr = function(value) {
    return Array.isArray(value);
}

is.obj = function(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

is.fun = function(value) {
    return typeof value === 'function';
}

is.truthy = function(value) {
    return !!value;
}

is.falsy = function(value) {
    return !value;
}