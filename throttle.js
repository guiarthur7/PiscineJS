function throttle(func, time) {
    let wait = false
    return function(...arg) {
        if (wait) return
        func(...arg)
        wait = true
        setTimeout(() => {
            wait = false
        }, time)
    }
}