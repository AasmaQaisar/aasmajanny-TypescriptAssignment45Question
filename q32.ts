// Make a list of current users
let current_users = ["john", "janny", "aasma", "sarah", "miral"];
// Make a list of new users
let new_users = ["bunny", "jane", "hunny", "jazz", "candy"];
for (let i = 0; i < new_users.length; i++) {
    let username_taken = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            username_taken = true;
            break;
        }
    }
    // Check the flag to see if the username is taken and print the appropriate message
    if (username_taken) {
        console.log("Sorry, the username " + new_users[i] + " is already taken. Please choose a different username.");
    }
    else {
        console.log("Congratulations, the username " + new_users[i] + " is available!");
    }
}

