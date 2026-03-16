function hasCity(country, tab) {
    return function(city) {
        if (tab.includes(city)) {
            return city + " is a part of " + country
        } else {
            return city + " is not a part of " + country
        }
    }
}