// JavaScript Array filter() Method
// The filter() method creates a new array containing only the elements that satisfy the given condition.

const prices = [500, 1200, 800, 2500, 1500, 300];

console.log("Original prices:", prices);

const expensivePrices = prices.filter((price) => price > 1000);

console.log("Prices greater than 1000:", expensivePrices);


// JavaScript Array filter() Method with Strings
// The filter() method can be used to select strings that satisfy a specific condition.

const languages = ["JavaScript", "Java", "Python", "PHP", "C++"];

const longNames = languages.filter((language) => language.length > 4);

console.log("Languages:", languages);

console.log("Languages with more than 4 characters:", longNames);


// JavaScript Array filter() Method with Objects
// The filter() method can be used to select objects based on a property value.

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 800 },
  { name: "Monitor", price: 15000 },
  { name: "Keyboard", price: 1200 },
];

const costlyProducts = products.filter((product) => product.price > 10000);

console.log("Costly products:", costlyProducts);

console.log(
  "Costly product names:",
  costlyProducts.map((product) => product.name)
);
