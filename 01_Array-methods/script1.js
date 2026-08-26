// JavaScript Array Declaration
// An array can be created using square brackets [] or by using the Array constructor with the new keyword.

const colors = ["red", "blue", "green", "yellow"];

const number = new Array(10, 20, 30, 40, 50);

console.log(typeof number); // object

console.log("colors: ", colors);
console.log("numbers:", number);


// JavaScript Array Index
// Array index is used to access or change a specific element in an array. The index starts from 0.

let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
days[5] = "sunday";
console.log(days)


// JavaScript Array length Property
// The length property returns the total number of elements in an array. We can use length - 1 to get the index of the last element.

let games = ["cricket", "football", "tennis", "hockey"];
console.log("last element:", games[games.length - 1])


// JavaScript Array Element Modification
// An array element can be changed by using its index and assigning a new value to that index.

let indoorGames = ["Chess", "Carrom", "Table Tennis"];
indoorGames[2] = "Ludo";
console.log("After modification:", indoorGames)


// JavaScript Array push() Method
// The push() method adds a new element to the end of an array.

let cities = ["Mumbai", "Delhi", "Bhavnagar"];
cities.push("Ahmedabad");
console.log("After push:", cities);


// JavaScript Array unshift() Method
// The unshift() method adds a new element to the beginning of an array.

let animals = ["Dog", "Cat", "Horse"];
animals.unshift("Lion");
console.log("After unshift:", animals);


// JavaScript Array pop() Method
// The pop() method removes the last element from an array.

let countries = ["India", "USA", "China", "Japan"];
countries.pop();
console.log("After pop:", countries);


// JavaScript Array splice() Method - Add Elements
// The splice() method can replace an existing element by removing it and adding a new element at the same position.

let prices = [100, 200, 500, 600, 700];
console.log("Original prices:", prices);

prices.splice(2, 1, 300, 400);
console.log("Prices after adding elements:", prices);


// JavaScript Array forEach() Method
// The forEach() method executes a function once for each element in an array.

let numbers = [10, 20, 30, 40];

console.log("ForEach():");

numbers.forEach(function (number) {
    console.log("Number:", number);
});


// JavaScript Array concat() Method
// The concat() method joins two or more arrays and returns a new combined array without changing the original arrays.

let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Mango", "Grapes"];

let Fruits = fruits1.concat(fruits2);

console.log("Fruits 1:", fruits1);
console.log("Fruits 2:", fruits2);
console.log("Combined Fruits:", Fruits);


// JavaScript Array toString() Method
// The toString() method converts an array into a string by joining its elements with commas.

let subjects = ["Maths", "Science", "English", "Computer"];

let subjectsString = subjects.toString();

console.log("Original Array:", subjects);
console.log("Converted to String:", subjectsString);


// JavaScript Array join() Method
// The join() method creates a new string by combining all elements of an array with a specified separator between each element.

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Fruits array:", fruits);
console.log("Fruits as string:", fruits.join(" - "));


// JavaScript Array flat() Method
// The flat() method removes one level of nested arrays and returns a new array. Using Infinity removes all nested levels.

const products = [
    ["Laptop", ["Dell", "HP"]],
    ["Mobile", ["Samsung", ["iPhone", "OnePlus"]]]
];

console.log("Original products:", products);

// Removes one level of nesting
console.log("After flat():", products.flat());

// Removes all levels of nesting
console.log("After flat(Infinity):", products.flat(Infinity));


// JavaScript Array slice() Method
// The slice() method returns a new array containing selected elements from the original array without changing the original array.

// The end index is excluded.

const scores = [100, 200, 300, 400, 500];

const result = scores.slice(1, 4);

console.log("Original array:", scores);
console.log("Sliced array:", result);


// JavaScript Array some() Method
// The some() method checks whether at least one element in the array satisfies the given condition.

let ages = [12, 15, 18, 21, 25];

const AgeResult = ages.some((age) => age >= 18);

console.log("Result:", result);


// JavaScript Array reverse() Method
// The reverse() method reverses the order of elements in an array and changes the original array.

console.log("Original ages:", ages);

console.log("Reversed ages:", ages.reverse());

console.log("After reverse:", ages);


// JavaScript Array values() Method
// The values() method returns an iterator containing the values of each element in an array.

let ageIterator = ages.values();

console.log("Age iterator:", ageIterator);

for (let age of ageIterator) {
    console.log(age);
}


// JavaScript Array indexOf() Method
// The indexOf() method is used to find the index of a particular element in an array.

let animal = ["Tiger", "Elephant", "Rabbit", "Zebra"];

console.log("Index of Rabbit:", animals.indexOf("Rabbit"));


// JavaScript Array includes() Method
// The includes() method checks whether a particular element exists in an array and returns true or false.

console.log("Includes Zebra:", animals.includes("Zebra"));


// JavaScript Array reverse() Method
// The reverse() method reverses the order of elements in an array and changes the original array.

let months = ["January", "March", "June", "December"];

months.reverse();

console.log("Reversed months:", months);


// JavaScript Array sort() Method
// The sort() method arranges the elements of an array according to the specified sorting condition.

let weights = [45, 72, 38, 90, 56];

console.log("Ascending weights:", weights.sort((a, b) => {
    return a - b;
}));

