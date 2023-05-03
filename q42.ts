// Define the array of magicians
let magicians = ['Aasma', 'Ayesha', 'Iqra', 'Kanwal', 'Fatime'];
// Define a function to modify the array of magicians
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Define a function to display the array of magicians
function show_magicians(magicians: string[]) {
    console.log("Magicians:");
    for (let i = 0; i < magicians.length; i++) {
        console.log("- " + magicians[i]);
    }
}
make_great(magicians);
show_magicians(magicians);

