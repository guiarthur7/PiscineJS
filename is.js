const is = {
    num(n) {
        return typeof n === 'number' && !isNaN(n);
    },
    
    nan(n) {
        return isNaN(n);
    },
    
    str(s) {
        return typeof s === 'string';
    },
    
    bool(b) {
        return typeof b === 'boolean';
    },
    
    undef(value) {
        return value === undefined;
    },
    
    def(value) {
        return value !== undefined;
    },
    
    arr(value) {
        return Array.isArray(value);
    },
    
    obj(value) {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    },
    
    fun(value) {
        return typeof value === 'function';
    },
    
    truthy(value) {
        return !!value;
    },
    
    falsy(value) {
        return !value;
    }
};