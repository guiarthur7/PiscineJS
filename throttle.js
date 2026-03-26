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
    let timer = null
    let lastArgs = null
    let lastThis = null

    return function(...arg) {
        lastArgs = arg
        lastThis = this

        if (!timer) {
            if (leading) {
                func.apply(lastThis, lastArgs)
                lastArgs = null
                lastThis = null
            }

            timer = setTimeout(() => {
                timer = null
                if (trailing && lastArgs) {
                    func.apply(lastThis, lastArgs)
                    lastArgs = null
                    lastThis = null
                }
            }, time)
        }
    }
}