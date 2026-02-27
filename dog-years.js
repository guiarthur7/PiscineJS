function dogYears(planet, age) {
    let orbitalPeriod;
    
    if (planet === "earth") {
        orbitalPeriod = 1.0;
    }
    if (planet === "mercury") {
        orbitalPeriod = 0.2408467 * 31536000;
    }
    if (planet === "venus") {
        orbitalPeriod = 0.61519726 * 31536000;
    }
    if (planet === "mars") {
        orbitalPeriod = 1.8808158 * 31536000;
    }
    if (planet === "jupiter") {
        orbitalPeriod = 11.862615 * 31536000;
    }
    if (planet === "saturn") {
        orbitalPeriod = 29.447498 * 31536000;
    }
    if (planet === "uranus") {
        orbitalPeriod = 84.016846 * 31536000;
    }
    if (planet === "neptune") {
        orbitalPeriod = 164.79132 * 31536000;
    }
    
    return age / orbitalPeriod;
}