function hasCity(country, tab) {
    return function(city) {
        if (tab.includes(city)) {
            return city + " is a city from " + country
        } else {
            return city + " is not a city from " + country
        }
    }
}