function getAcceleration(obj) {
    let a = 0
    if (obj.F !== undifined && obj.m !== undifined) {
        a = obj.F/obj.m
        return a
    } if (obj.Δt !== undifined && obj.Δv !== undifined) {
        a = obj.Δt/obj.Δv
        return a
    } if (obj.d !== undifined && obj.t !== undifined) {
        a = 2*obj.d/obj.t**2
        return a
    } else {
        return "impossible"
    }
}
