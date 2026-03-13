function citiesOnly(tab) {
    const cities = tab.map(obj => obj.city)
    return cities
}

function upperCasingStates(tab) {
    const states = tab.map(obj => 
        obj[0].toUpperCase() + obj.slice(1)
    )
    return states
}

console.log(citiesOnly([
  {
    city: "Los Angeles",
    temperature: "  101 °F   ",
  },
  {
    city: "San Francisco",
    temperature: " 84 ° F   ",
  },
]))

console.log(upperCasingStates(["alabama", "new jersey"]));