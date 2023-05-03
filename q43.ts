// Define the make_great() function
function make_great(names: string[]) {
    let great_names = [];
    for (var i = 0; i < names.length; i++) {
        great_names.push("The Great " + names[i]);
    }
    return great_names;
}
function show_magicians(names: string[]) {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// Define the array of magicians' names
let magicians = ['Aasma', 'Ayesha', 'Iqra', 'Kanwal', 'Fatime'];
let great_magicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(great_magicians);

