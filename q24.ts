// Equality tests

let test;

let n1 = "apple";
let n2 = "apple";
let n3 = "Orange";
let n4 = "banana";

if (n1 == n2) {
  test = true;
} else {
  test = false;
}
console.log(test);

// Inequality tests

if (n1 !== n3) {
  test = true;
} else {
  test = false;
}
console.log(test);

if (n4 !== n4) {
  test = true;
} else {
  test = false;
}
console.log(test);

// Lower case tests
let lower_case = "HELLO".toLowerCase(); 
let lower_case1 = "WORLD".toLowerCase(); 

console.log(lower_case);
console.log(lower_case1);

// Equality tests

let num1 = 10;
let num2 = 20;

console.log(5 == 5); 
console.log(num1 == num2); 

 // Greater than tests

console.log(10 > 5);
console.log(2 > 10);

 // Less than tests

console.log(5 < 10);
console.log(20 < 10);

 // Greater than or equal to tests

console.log(10 >= 10); 
console.log(5 >= 10); 

 // Less than or equal to tests

console.log(5 <= 10); 
console.log(20 <= 10); 

 // "And" operator tests
console.log(true && true); 
console.log(true && false); 

 // "Or" operator tests
console.log(true || false); 
console.log(false || false); 


 const fruits = ["apple", "banana", "orange"];


console.log(fruits.includes("apple")); 
console.log(fruits.includes("Mango")); 


const vegetables = ["carrot", "lettuce", "tomato"];

console.log(!vegetables.includes("broccoli")); 
console.log(!vegetables.includes("carrot")); 