function debounce(func, delay) {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

function opDebounce(func, time, option = { leading : false}) {
    let timer = null
    let called = false
    let { leading } = option
    if (leading == true && called == false) {
        return function(...args) {
            func(...args)
            called = true
        }
    } else {
        clearTimeout(timer);
        timer = setTimeout(() => {
            called = false
            if (!leading) {
                func(...args);
            }
        }, time);
    }
}