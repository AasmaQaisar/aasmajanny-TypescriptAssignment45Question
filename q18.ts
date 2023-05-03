// Create an array of five places to visit
let placesToVisit = ['Canada', 'America', 'Belgium', 'German', 'Malaysia',]; 

// Print the array in its original order
console.log("Original Order:", placesToVisit);

// Print the array in alphabetical order without modifying the original list
let sortedPlaces = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedPlaces);

// Print the array to show that it's still in its original order
console.log("Original Order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
let reverseSortedPlaces = [...placesToVisit].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedPlaces);

// Print the array to show that it's still in its original order
console.log("Original Order:", placesToVisit);

// Reverse the order of the original list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again to show it's back to its original order
placesToVisit.reverse();
console.log("Original Order:", placesToVisit);

// Sort the list in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);

// Sort the list in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order:", placesToVisit);


