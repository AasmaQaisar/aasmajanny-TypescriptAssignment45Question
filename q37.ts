//set a default size of "large" and a default message of "I love TypeScript":
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The shirt is a size ${size} and has the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love JavaScript");
