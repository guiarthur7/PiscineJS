function dogYears(planet, age) {
    const earthYear = 31557600;
    let orbitalPeriod;
    
    if (planet === "earth") {
        orbitalPeriod = 1.0;
    }
    if (planet === "mercury") {
        orbitalPeriod = 0.2408467;
    }
    if (planet === "venus") {
        orbitalPeriod = 0.61519726;
    }
    if (planet === "mars") {
        orbitalPeriod = 1.8808158;
    }
    if (planet === "jupiter") {
        orbitalPeriod = 11.862615;
    }
    if (planet === "saturn") {
        orbitalPeriod = 29.447498;
    }
    if (planet === "uranus") {
        orbitalPeriod = 84.016846;
    }
    if (planet === "neptune") {
        orbitalPeriod = 164.79132;
    }
    
    const ageInEarthYears = age / earthYear;
    const ageOnPlanet = ageInEarthYears / orbitalPeriod;
    const dogAge = ageOnPlanet * 7;
    
    return Math.round(dogAge * 100) / 100;
}