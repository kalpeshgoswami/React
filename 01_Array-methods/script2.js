// JavaScript Array find() Method
// The find() method returns the first element that satisfies the given condition.

let numbers = [5, 12, 18, 25, 30];

const result = numbers.find(num => num > 15);

console.log("find():", result);


// JavaScript Array findIndex() Method
// The findIndex() method returns the index of the first element that satisfies the given condition.

const index = numbers.findIndex(num => num > 15);

console.log("findIndex():", index);


// JavaScript Array some() Method
// The some() method checks whether at least one element satisfies the given condition.

const hasLargeNumber = numbers.some(num => num > 25);

console.log("some():", hasLargeNumber);


// JavaScript Array every() Method
// The every() method checks whether all elements satisfy the given condition.

const allPositive = numbers.every(num => num > 0);

console.log("every():", allPositive);


// JavaScript Array find() & findIndex() Methods
// The find() method returns the first value that satisfies the condition, while findIndex() returns the index of the first matching value.

const ages = [10, 15, 18, 21, 25];

console.log("find():", ages.find((age) => age >= 18));

// findIndex() returns the index position of the first matching element

const index1 = ages.findIndex((age) => age >= 18);

console.log("findIndex():", index1);

console.log("Value at index:", ages[index1]);


// JavaScript Array some() Method
// The some() method checks whether at least one element satisfies the given condition.

console.log("some():", ages.some((age) => age > 20));


// JavaScript Array every() Method
// The every() method checks whether all elements satisfy the given condition.

console.log("every():", ages.every((age) => age > 5));

console.log("every():", ages.every((age) => age >= 10));

