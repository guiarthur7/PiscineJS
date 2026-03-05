function letterSpaceNumber(s) {
    const regex = /[a-zA-Z] \d(?![a-zA-Z])/g
    const matches = s.match(regex)
    return matches || []
}

console.log(letterSpaceNumber("example 1, example 20"));