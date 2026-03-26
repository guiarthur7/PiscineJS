function throttle(func, time) {
    let wait = false
    return function(...arg) {
        func(...arg)
        wait = true
        setTimeout( () => {
            wait = false
        }, time)
    }
}