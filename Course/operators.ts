/**
 * The spread operator ( ... ) spreads arrays and objects into single values
 */
// Array
let fruits: Array<string> = ['apple', 'pear', 'grape'];
let food: string[] = ['pizza', 'hamburger', 'muffin'];
let edibles: Array<string> = [... fruits, ...food];

console.log("Got the edibles as: ", edibles);

// Object
let user = {
    firstName: "Siddharth",
    lastName: "Ajmera",
    username: "SiddAjmera"
};

let userDetails = {
    ...user,
    address: "123 NE St.",
    email: "b.lopez@mlsdatatools.com",

}

console.log("Got the user as: ", userDetails);

// Functions
// Placing a question mark before the colon and the data type makes the argument optional
function add(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

let numbers: Array<number> = [1, 2, 3];

console.log("Got the sum of all the numbers as: ", add(...numbers));

// Backticks
console.log(
    'The user with name: ' +
    user.firstName +
    ' has an address of: ' +
    userDetails.address +
    ' and an email of  '
    + userDetails.email
    );

console.log(`The user with name: ${user.firstName} has an address of: ${userDetails.address} and an email of ${userDetails.email}`);

// This syntax stringifies arrays and objects instead of printing them as single items
 console.log(`Got the edibles as: ${edibles}`);
// In this case, it doesn't even print the objects
 console.log(`Got the userDetails as: ${userDetails}`);

 // If you want to print objects and arrays, it's better to use the attach syntax
 console.log(`Got the edibles as : `, edibles);
 console.log(`Got the userDetails as: `, userDetails);

 // Destructure

 let { firstName: fName, lastName: lName} = user;
console.log(fName);
console.log(lName);