const arr = new Array(23, 34, 78);
console.log(arr[0]);
console.log(arr.length);

// map
const newarr = arr.map((ele, id) => {
  return ele * 2;
});
console.log(newarr);

const fruits = ["mango", "apple", "banana", ""];
console.log(fruits);

const newf = fruits.map((fruit, id) => {
  console.log(fruit + "3");
});

const numbers = [1, 4, 9];
const roots = numbers.map((num, id) => Math.sqrt(num));

console.log(roots);
const integers = ["1", "2", "3"].map((str) => parseInt(str, 10));
console.log(integers);

console.log(typeof integers);
//in sparse array
const newa = [1, , 3];
console.log(
  newa.map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  })
);

//map function skips the empty spaces

//filter

const words = ["spaces", "shreya", "flowers", "mango"];
const result = words.filter((word) => word.length > 5);
console.log(result);

const nums = [1, 2, 3, 5, 9, 29, 293, 22];
const filtered = nums.filter((num, id) => num % 2 == 0);
console.log(filtered);
function isBigEnough(value) {
  return value >= 10;
}

const filters = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filters);

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
console.log(array.filter(isPrime));

// for empty spaces
//filter also skips the empty elements like the map function

console.log([1, , undefined].filter((x) => x !== 2));

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
//reduce
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = currentValue * 2;

  return accumulator;
}, {});


console.log(sumWithInitial);
// Expected output: 10

const sum = array1.reduce((prev, current, index, array) => {
  return prev + current;
}, 0);

const string=array1.reduce((accumulator,currentValue)=>{ 
    accumulator+=currentValue
    return accumulator;
},"hello ")

//every
// it returns true if every value follows the condition, if any false value is encountered it returns false and stops iterating through the array
const isBelowThreshold=(curr)=>curr<40;
const array2 = [1, 30, 39, 29, 10, 13];
console.log(array2.every(isBelowThreshold));


const isSubset=(arr1,arr2)=>arr1.every((element)=>arr2.includes(element));

console.log(isSubset([1,2,3,4],[1,2,3,4,5,6,7,8]));

//every() will not run its predicate on empty slots.
//this will return true ;
const number2=[2,-34,55,6666,4,-45];
const isIncreasing=numbers.filter((num)=>num>0).every((num,idx,arr)=>{
    if(idx==0)return true;
    return num>arr[idx-1];
}
   
)

console.log([2, ,2].every((x)=>x===2))

