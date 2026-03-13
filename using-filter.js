function filterShortStateName(tab) {
    return tab.filter(word => word.length < 7)
}

console.log(filterShortStateName(["Salutcarthur", "aa"]))

function filterStartVowel(tab) {
    return tab.filter(word => "aeiou".includes(word[0].toLowerCase()));
}

function filter5Vowels(tab) {
    return tab.filter(word => {
        let cpt = 0
        for (let i = 0; i < word.length; i ++) {
            if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
                cpt +=1
            }
        }
        return cpt >=5
    })
}

console.log(filter5Vowels(["Salutcarthur", "aaeiouaaaaa"]))

function filter1DistinctVowel(tab) {
    return tab.filter(word => {
        let str = ""
        for (let i = 0; i < word.length; i ++) {
            if (word[i].toLowerCase() === "a" || word[i].toLowerCase() === "e" || word[i].toLowerCase() === "i" || word[i].toLowerCase() === "o" || word[i].toLowerCase() === "u") {
                str += word[i]
            }
        }
        let str2 = str[0]
        for (let x = 1; x <str.length; x++) {
            if (str[x] !== str2) {
                return false
            }
        }
        return true
    })
}

console.log(filter1DistinctVowel(["Alabama", "arthur", "aAaAaaAaAa", "aoifnaofnaf"]))