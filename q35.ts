// Define a list of animals
const animals = ['dog', 'cat', 'rabbit'];
// Print out the name of each animal
console.log("The animals are:");
for (let animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
console.log("\nHere's why each animal would make a great pet:");
for (let animal of animals) {
    switch (animal) {
        case 'dog':
            console.log("A dog would make a great pet because they are loyal and loving.");
            break;
        case 'cat':
            console.log("A cat would make a great pet because they are independent and playful.");
            break;
        case 'rabbit':
            console.log("A rabbit would make a great pet because they are quiet and low-maintenance.");
            break;
        default:
            console.log("Unknown animal!");
    }
}
// Print out the common characteristic
console.log("\nAny of these animals would make a great pet!");

