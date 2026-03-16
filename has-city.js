function hasCity(country, tab) {
    return function(city) {
        if (tab.includes(city)) {
            return city + " is a city of " + country
        } else {
            return city + " is not a city of " + country
        }
    }
}