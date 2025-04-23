// 7. Create an array named colors that contains five different names of colors as strings.
const colors = ["pink", "green", "blue", "purple", "yellow"];

//8. Access the first color in the array and print it to the console using console.log()
console.log("first color : ", colors[0]);

//9. Now do the same with the third color in the list. (Remember that array indexes start at 0, not at 1!)
console.log("third color : ", colors[2]);

//10. Write one line of code that changes the value of the last color in the list to "ultraviolet" (overwriting the previous value).
colors[colors.length - 1] = "ultravoilet";
console.log(colors);

//11. Create a new variable called fourthColor and set it equal to the fourth color in the list.
let fourthColor = colors[3];

//12. Add another color to the end of the list.

colors.push("brown");
console.log(colors);

//13. Add another color to the beginning of the list.
colors.unshift("black");
console.log(colors);

//14. Print the length of the array to the console with console.log()
console.log("length of the array :", colors.length);

//15. Remove the last color from the end of list, and then print the length of the array to the console one more time.

colors.pop();
console.log(
  "length of the array after deleting the last element",
  colors.length
);

//16. Write a for loop to iterate through every color in the array and print each color's value to the console.

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//17. Copying from that loop you just wrote, modify it to print every color's value and every color's index in this format: 3, purple or 0, blue etc.

for (let i = 0; i < colors.length; i++) {
  console.log(i, ":", colors[i]);
}

//18. Create a variable named lastColor that will always point to the last element of the colors array, no matter how many colors are in the list. (Hint: make use of the array's length property for this!)

lastcolor = colors[colors.length - 1];
console.log("lastColor : ", lastcolor);

//19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

myPenguin = {
  characterName: "Captain Cook",
  origin: "Whiteblack the Penguin Sees the World",
  author: "H. A. Rey and Margret Rey",
};

//20. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"

console.log("Hello, I'm a penguin and my name is ", myPenguin.characterName);

//21. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

myPenguin.canfly = false;
console.log(myPenguin);

//22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)

myPenguin.chirp = () =>
  console.log("CHIRP CHIRP! Is this what penguins sound like?");
console.log(myPenguin);

//23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!
myPenguin.sayHello = function () {
  console.log(`Hello, I'm a penguin and my name is, ${this.characterName}`);
};

//24. Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)
myPenguin.sayHello();

//25. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.
myPenguin.characterName = "Penguin McPenguinFace";
console.log(myPenguin);
myPenguin.sayHello();

//26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

myPenguin.fly = function () {
  if (this.canfly) {
    console.log("I can fly!");
  } else {
    console.log("No flying for me!");
  }
};

//27. Call your penguin's fly() method and make sure it works!

myPenguin.fly();

//28. Change the canFly property to true -- again, without modifying any of your previous code!
myPenguin.canfly = true;

//29. Now call your penguin's fly() method again and make sure it works as expected!
myPenguin.fly();

//30. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

for (let key in myPenguin) {
  console.log("key : ", key);
}

//31. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

for (let key in myPenguin) {
  console.log(key, ": ", myPenguin[key]);
}

//32. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

myPenguin.favoriteFoods = ["burger", "pizza", "pasta"];
console.log(myPenguin);

//33. Access your penguin's second favorite food and print it to the console using console.log()

console.log("penguis second favorite food is", myPenguin.favoriteFoods[1]);

//34. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

let firstFavFood = myPenguin.favoriteFoods[0];

//35. Add another food to the end of the list.

myPenguin.favoriteFoods.push("choco lava");

//36. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log("length of foods array : ", myPenguin.favoriteFoods.length);

//37. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
const favfood = myPenguin.favoriteFoods;

favfood[favfood.length - 1] = "pineapple";
console.log(myPenguin);

//38. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)

let lastfav = favfood[favfood.length - 1];
console.log(lastfav);

//39. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)

for (let i = 0; i < favfood.length; i++) {
  console.log("penguins fav fooods:", favfood[i]);
}

//40. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)

myPenguin.outfit = {
  hat: "baseball cap",
  shirt: "Hawaiian shirt",
  pants: "cargo shorts",
  shoes: "flip-flops",
};
console.log(myPenguin);

//41. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.

let penguinHatType = myPenguin.outfit.hat;
console.log("penguinHatType is :", penguinHatType);

//42. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!

myPenguin.outfit.accessory = "pocket watch";

//43. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)

myPenguin.outfit.hat = "top hat";

//44. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)
const penguinsOutfit = myPenguin.outfit;
delete penguinsOutfit.pants;
console.log(myPenguin.outfit);

//45. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)

for (let outfit in penguinsOutfit) {
  console.log(outfit, ":", penguinsOutfit[outfit]);
}

//For these last few challenges, I'll create three penguins for you to work with. Copy-paste this code snippet to the end of your code:
var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  },
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  },
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  },
};

//46. Create a new variable named penguins and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)

const penguins = [gunter, ramon, fred];
console.log(penguins);

//47. Access the first penguin in the list and print it to the console using console.log() -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)

console.log(penguins[0]);

//48. Create a new variable called secondPenguin and set it equal to the second penguin in your penguins array.

let secondPenguin = penguins[1];

//49. Print to the console the name of the last penguin in the list.

console.log(penguins[penguins.length - 1]);

//50. Remember the penguin you created earlier, with the variable name of myPenguin? Add that penguin to the end of the penguins array!

penguins.push(myPenguin);
console.log(penguins);

//51. Print the length of the penguins array to the console.

console.log(penguins.length);

//52. Write one more line of code to change the first penguin's canFly property to the value true (overriding its existing value).

penguins[0].canFly = true;
console.log(penguins);

//53. Call the sayHello method of the first penguin in your penguins array!

penguins[0].sayHello();

//54. Write a for loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.
// penguins.pop();
myPenguin.name = myPenguin.characterName;
penguins.forEach((penguin) => {
  console.log(penguin.name);
});

//55. Write a for loop to call the sayHello method of every penguin in the array!
penguins.forEach((penguin) => {
  penguin.sayHello();
});

//56. Write a for loop to iterate through every penguin in the array, and add a new property to each penguin called numberOfFeet with the value 2

penguins.forEach((penguin) => {
  penguin.numberOfFeet = 2;
});
console.log(penguins);

//57. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's name and " can fly!" -- for example, "Gunter can fly!" or "Ramón can fly!" (Don't do anything for the penguins that cannot fly.)
myPenguin.canFly = myPenguin.canfly;
penguins.forEach((penguin) => {
  if (penguin.canFly) {
    console.log(`${penguin.name} can fly`);
  }
});
