// JavaScript Array map() Method
// The map() method creates a new array by applying a function to every element of the original array.

const numbers = [2, 4, 6, 8, 10];

const doubleNumbers = numbers.map((number) => number * 2);

console.log("numbers:", numbers);

console.log("New array:", doubleNumbers);


// JavaScript Array map() Method with Strings
// The map() method can be used to transform each string element into a new value.

const names = ["dharmik", "amit", "ankit", "price"];

const upperNames = names.map((name) => name.toUpperCase());

console.log("Names:", names);

console.log("Uppercase names:", upperNames);


// JavaScript Array map() Method with Objects
// The map() method can be used to get a specific property from every object in an array.

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];

const productNames = products.map((product) => product.name);

console.log("Product names:", productNames);
