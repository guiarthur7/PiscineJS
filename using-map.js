function fahrenheitToCelsius(tab) {
  return tab.map(str => {
    str.replace(/°F/g, "")
    const f = parseFloat(str);
    const c = Math.floor((f - 32) * 5 / 9);
    return c + '°C';
  });
}

function citiesOnly(tab) {
    const cities = tab.map(obj => obj.city)
    return cities
}

function upperCasingStates(tab) {
  return tab.map(state =>
    state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
}

function trimTemp(tab) {
    return tab.map(({ city, temperature }) => ({
        city: city,
        temperature: temperature.replace(/\s+/g, "")
    }));
}

function tempForecasts(tab) {
  return tab.map(({ city, temperature, state }) => {
    const celsius = fahrenheitToCelsius([temperature])[0].replace('°C', '°Celsius');
    const stateCap = state.charAt(0).toUpperCase() + state.slice(1);
    return `${celsius} in ${city}, ${stateCap}`;
  });
}

console.log(fahrenheitToCelsius(["68°F", "59°F", "25°F"]))

console.log(trimTemp([
  { city: "Los Angeles", temperature: "  101 °F   " },
  { city: "San Francisco", temperature: " 84 ° F   " },
]));

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