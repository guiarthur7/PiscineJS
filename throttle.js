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

function opThrottle(func, time, options = {leading: false, trailing: false,}) {
    const { leading, trailing } = options
    let waiting = false
    let firstCalled = false

    return function(...arg) {
        if (leading && !firstCalled) {
            func(...arg)
            firstCalled = true
            waiting = true
            setTimeout(() => {
                waiting = false
            }, time)
            return
        }
        if (waiting) return

        func(...arg)
        waiting = true
        setTimeout(() => {
            waiting = false
            if (trailing) {
                func()
            }
        }, time)
    }
}