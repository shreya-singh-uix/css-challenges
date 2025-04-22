const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
console.log(characters);

//MAP
//array for names
const names = characters.map((obj) => obj.name);
console.log(names);

//array of heights

const heights = characters.map((obj) => obj.height);
console.log(heights);

//Get an array of objects with just name and height properties
const arr = characters.map((obj) => ({
  name: `${obj.name}`,
  height: `${obj.height}`,
}));
console.log(arr);

//Get an array of all first names

const firstname = characters.map((obj, id) => obj.name.split(" ")[0]);
console.log(firstname);

//REDUCE
//Get the total mass of all characters

console.log(
  characters.reduce((accumulator, currentValue) => {
    accumulator += parseInt(currentValue.mass, 10);
    return accumulator;
  }, 0)
);

//Get the total height of all characters

console.log(
  characters.reduce((accumulator, currentValue) => {
    accumulator += parseInt(currentValue.height, 10);
    return accumulator;
  }, 0)
);

//Get the total number of characters in all the character names

console.log(
  characters.reduce((accumulator, currentValue) => {
    accumulator += currentValue.name.length;
    return accumulator;
  }, 0)
);

// Get the total number of characters by eye color (hint. a map of eye color to count)

console.log(
  characters.reduce((accumulator, currentValue) => {
    accumulator += currentValue.eye_color.length;
    return accumulator;
  }, 0)
);

//FILTER
//Get characters with mass greater than 100

const massarr = characters.filter((obj) => obj.mass > 100);
console.log("persons with mass greater than 100", massarr);

//Get characters with height less than 200

const heightarr = characters.filter((obj) => obj.height < 200);
console.log("persons with height less than 200", heightarr);

//Get all male characters

const male = characters.filter((obj) => obj.gender === "male");
console.log("all males", male);

// get all female caharcters

const female = characters.filter((obj) => obj.gender === "female");
console.log("all females", female);

//SORT

//Sort by name
const sortname = [...characters];
function sortbynames(obj1, obj2) {
  if (obj1.name > obj2.name) return 1;
  if (obj1.name < obj2.name) return -1;
  return 0;
}
sortname.sort(sortbynames);
console.log("Sorted by name", sortname);

// Sort by mass
const sortmass = [...characters];

function sortbymass(obj1, obj2) {
  return obj1.mass - obj2.mass;
}
sortname.sort(sortbymass);

console.log("sort by mass", sortname);

//Sort by height
const sortheight = [...characters];
function sortbyheight(obj1, obj2) {
  return obj1.height - obj2.height;
}
sortheight.sort(sortbyheight);
console.log("sort by height", sortheight);

//sort by gender
const sortgender = [...characters];

sortgender.sort((a, b) => {
  if (a.gender === "male" && b.gender === "female") return -1;
  if (a.gender === "female" && b.gender === "male") return 1;
  return 0;
});
console.log("Gender sort", sortgender);

//EVERY
//Does every character have blue eyes?

const isblue = characters.every((obj) => obj.eye_color === "blue");
console.log(isblue);

// Does every character have mass more than 40?

const isgreater = characters.every((obj) => obj.mass > 40);
console.log(isgreater);

//s every character shorter than 200?

const isless = characters.every((obj) => obj.height < 200);
console.log(isless);

// s every character male?

const ismale = characters.every((obj) => obj.gender === "male");
console.log(ismale);

//SOME
//s there at least one male character?

const isanymale = characters.some((obj) => obj.gender === "male");
console.log(isanymale);

//Is there at least one character with blue eyes?

const isanyblue = characters.some((obj) => obj.eye_color === "blue");
console.log(isanyblue);

// Is there at least one character taller than 200?

const isanytaller = characters.some((obj) => obj.height > 200);
console.log(isanytaller);

//Is there at least one character that has mass less than 50?

const isanyless = characters.some((obj) => obj.mass < 50);
console.log(isanyless);

Array.prototype.myForEach = function (fn) {
  for (var i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

const arr4 = [23, 34, 5, 2, 1];
arr4.myForEach((element) => {
  console.log(element);
});

Array.prototype.myMap = function (fn) {
  const arrayy = [];
  for (var i = 0; i < this.length; i++) {
    arrayy[i] = fn(this[i], i, this);
  }
  return arrayy;
};

const newarr = arr4.myMap((ele) => {
  return ele * 2;
});

console.log(newarr);

Array.prototype.myEvery = function (fn) {
  for (var i = 0; i < this.length; i++) {
    const value = fn(this[i], i, this);
    if (!value) return false;
  }
  return true;
};

const newarr2 = arr4.myEvery((ele) => ele > 10);
console.log(newarr2);

Array.prototype.mySome = function (fn) {
  for (var i = 0; i < this.length; i++) {
    const value = fn(this[i], i, this);
    if (value) return true;
  }
  return false;
};

const newarr3 = arr4.mySome((ele) => ele > 10);
console.log(newarr3);

Array.prototype.myFilter = function (fn) {
  const filteredArray = [];
  for (var i = 0; i < this.length; i++) {
    const value = fn(this[i], i, this);
    if (Boolean(value)) {
      filteredArray[i] = value;
    }
  }
  return filteredArray;
};

const newfilteredArray = arr4.filter((element) => element > 10);
console.log(newfilteredArray);

Array.prototype.myReduce = function (fn, initialvalue) {
  let value;
  let start = 0;
  if (arguments.length >= 2) {
    value = initialvalue;
  } else {
    value = this[0];
    start = 1;
  }
  for (var i = start; i < this.length - 1; i++) {
    value = fn(value, this[i], i, this);
  }
  return value;
};

const newReducedValue = arr4.myReduce((accumulator, currentValue) => {
  console.log("current", currentValue, accumulator);
  accumulator += currentValue;
  return accumulator;
}, 0);

console.log(newReducedValue);
