// JavaScript Array reduce() Method
// The reduce() method reduces all elements of an array into a single value.

const numbers = [10, 20, 30, 40, 50];

let total = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("Total:", total);


// JavaScript Array reduce() Method
// The reduce() method can be used to find the total value of a property from an array of objects.

const products = [
  {
    name: "Laptop",
    price: 50000,
  },
  {
    name: "Mouse",
    price: 1000,
  },
  {
    name: "Keyboard",
    price: 2000,
  },
];

const totalPrice = products.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log("Total price:", totalPrice);
