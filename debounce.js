function debounce(func, time) {
    setTimeout(func, time)
}

function opDebounce(func, time, lead) {
    if (lead === true) {
        func()
        lead = false
    }
    setTimeout(func, time)
}