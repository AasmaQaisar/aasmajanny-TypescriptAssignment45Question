// predict true result
// Test 1
let x = 10;
console.log("Is x equal to 5? I predict True.");
console.log(x > 5);
//Test 2
let num1 = 15;
let num2 = 20;
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
//Test 3
let city = 'Lahore';
console.log("Is city == 'Lahore'? I predict True.");
console.log(city == 'Lahore');
//Test 4
let obj = {name: 'Janny', age: 23};
console.log("Does obj have property 'age'? I predict True.");
console.log('age' in obj);
//Test 5
let z = 10;
console.log("Is z not equal to 8? I predict True.");
console.log(z != 8);
// predict false result
//Test 1
let c = "hello";
console.log("Is y equal to 'aasma'? I predict False.");
console.log(c == 'aasma');
//Test 2
let a = 6;
console.log("Is a greater than 10? I predict False.");
console.log(a > 10);
//Test 3
let b = "c";
console.log("Is b equal to 'dog'? I predict False.");
console.log(b == 'dog');
//Test 4
let f = null;
console.log("Is f equal to undefined? I predict False.");
console.log(f === undefined);
//Test 5
let g = 0;
console.log("Is g truthy? I predict False.");
console.log(g ? true : false);

