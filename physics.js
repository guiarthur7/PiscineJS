function getAcceleration(obj) {
    let a = 0
    if (obj.F !== undefined && obj.m !== undefined) {
        a = obj.F/obj.m
        return a
    } if (obj.Δt !== undefined && obj.Δv !== undefined) {
        a = obj.Δt/obj.Δv
        return a
    } if (obj.d !== undefined && obj.t !== undefined) {
        a = 2*obj.d/obj.t**2
        return a
    } else {
        return "impossible"
    }
}
