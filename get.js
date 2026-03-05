function get(src, path) {
    let segments = path.split('.')
    let current = src
    
    for (let i = 0; i < segments.length; i++) {
        if (current === undefined || current === null) {
            return undefined
        }
        current = current[segments[i]]
    }
    
    return current
}
