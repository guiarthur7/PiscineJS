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

function opThrottle(func, wait, obj) {
    let timer = null
    let lastArgs = null
    const timeup = () => {
        if (obj?.trailing && lastArgs) {
            func(...lastArgs)
            lastArgs = null
            timer = setTimeout(timeup, wait)
        } else timer = null
    }
    return function (...args) {
        lastArgs = args
        if (!timer && obj?.leading) func(...args)
        if (!timer) timer = setTimeout(timeup, wait)
        if (obj?.trailing) lastArgs = args
    }
}