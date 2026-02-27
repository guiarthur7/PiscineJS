const escapeStr = "`\\/\"'";
const arr = [4, '2']
const obj = Object.freeze({
    str : "zobhumid",
    num : 7,
    bool : true,
    undef : undefined,
    nested : nested,
})
const nested = Object.freeze({
    arr : [4, undefined, '2'],
    obj : {
        str : "zboubynueve",
        num : 7,
        bool : true,
    }
})