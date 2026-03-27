function filterEntries(obj, fn) {
    let res = {}
    for (const [key, value] of Object.entries(obj)) {
        if (fn([key, value])) {
            res[key] = value
        }
    }
    return res
}

function mapEntries(obj, fn) {
    let res = {}
    for (const [key, value] of Object.entries(obj)) {
        res[fn([key, value])[0]] = fn([key, value])[1]
    }
    return res
}

function reduceEntries(obj, fn) {
    const entries = Object.entries(obj);
    let i = 0;
    let acc;
    if (arguments.length >= 3) {
        acc = arguments[2];
    } else {
        if (entries.length === 0) throw new TypeError('Reduce of empty object with no initial value');
        acc = entries[0];
        i = 1;
    }
    for (; i < entries.length; i++) {
        acc = fn(acc, entries[i]);
    }
    return acc;
}

const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}

function totalCalories(obj) {
    return reduceEntries(obj, (acc, [name, grams]) => {
        const per100 = nutritionDB[name].calories
        return Math.round(acc + per100 * (grams / 100));
    }, 0);
}

function lowCarbs(obj) {
    return filterEntries(obj, ([name, grams]) => {
        const per100 = nutritionDB[name]?.carbs ?? 0;
        const carbs = per100 * (grams / 100);
        return carbs < 50;
    });
}

function cartTotal(obj) {
    return mapEntries(obj, ([name, grams]) => {
        let res = {}
        res["calories"] = Math.round(nutritionDB[name].calories *(grams/100))
        res["protein"] = Math.round(nutritionDB[name].protein *(grams/100))
        res["carbs"] = Math.round(nutritionDB[name].carbs *(grams/100))
        res["sugar"] = Math.round(nutritionDB[name].sugar *(grams/100))
        res["fiber"] = Math.round(nutritionDB[name].fiber *(grams/100))
        res["fat"] = Math.round(nutritionDB[name].fat *(grams/100))

        return [name, res]
    })
}

const groceriesCart = { orange: 500, oil: 20, sugar: 480 };

console.log("Total calories:");
console.log(totalCalories(groceriesCart));
console.log("Items with low carbs:");
console.log(lowCarbs(groceriesCart));
console.log("Total cart nutritional facts:");
console.log(cartTotal(groceriesCart));