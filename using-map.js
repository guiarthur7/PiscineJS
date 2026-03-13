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
  return tab.map(({ city, temperature, state, region }) => {
    const tempF = parseFloat(temperature.replace(/[^0-9.\-]/g, ""));
    const tempC = ((tempF - 32) * 5 / 9).toFixed(1);
    return `${tempC}°Celsius in ${city}, ${state}`;
  });
}

console.log(tempForecasts([
  {
    city: "Pasadena",
    temperature: " 101 °F",
    state: "california",
    region: "West",
  },
]));

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