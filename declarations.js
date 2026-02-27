const escapeStr = "`\\/\"'";
const arr = Object.freeze([4, '2'])
const obj = Object.freeze({
    str : "zobhumid",
    num : 7,
    bool : true,
    undef : undefined,
})
const nested = Object.freeze({
    arr : Object.freeze([4, undefined, '2']),
    obj : Object.freeze({
        str : "zboubynueve",
        num : 7,
        bool : true,
    })
})