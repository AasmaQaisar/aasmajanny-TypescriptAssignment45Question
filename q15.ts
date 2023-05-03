// Define the guests list
let guest = ['Fiza', 'Zaynab', 'Mirha','Miral','Mehrma'];

const removeGuest = guest.pop();
// Print a message indicating the guest who can't make it
const msg = " can't make the dinner";
// Replace the guest who can't make it with the new guest
guest.push("Janny");
console.log(removeGuest + msg);

let txt = "";

guest.forEach(myFunction);
console.log(txt);

// Print a second set of invitation messages
function myFunction(value:any) {

	txt += value + " I would like you invite to dinner \n";
};