function longWords(tab) {
    return tab.every(word => word.length >= 5)
}

console.log(longWords(["IFBUAUFAUZFAFUI", "AIOZFBOAUFBAUOFBAOUFB"]))
console.log(longWords(["FUI", "FB"]))

function oneLongWord(tab) {
    return tab.some(word => word.length >= 10)
}

console.log(oneLongWord(["iuzfbvaiufaufaf", "uadbgbrguijub"]))
console.log(oneLongWord(["ufaf", "uaub"]))

function noLongWords(tab) {
    return tab.every(word => word.length <= 7)
}