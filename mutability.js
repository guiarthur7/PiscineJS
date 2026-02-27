const person = {
  name: "Rick",
  age: 78,
  country: "US",
};

// clone1: A copy that won't change when person changes
const clone1 = { ...person };

// clone2: Another copy that won't change when person changes
const clone2 = Object.assign({}, person);

// samePerson: A reference that WILL change when person changes
const samePerson = person;