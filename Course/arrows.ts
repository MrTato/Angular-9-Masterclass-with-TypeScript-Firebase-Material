function greetUser(name: string) {
    console.log(`Hello there, ${name}!`);
}

const greetUserByName = function(name: string) {
    console.log(`Hello there, ${name}!`);
};

greetUser(`John`);
greetUserByName(`Jane`);

// Arrow Functions

const greetUserByNameArrow = (name: string) => 
    console.log(`Hello there, ${name}!`);

greetUserByNameArrow(`Jacob`);

// Declaration of edibles array to be used in two lines that do the same thing, but one uses an arrow function
const edibles = [
    {
        edible: `pizza`,
        isVegan: false
    },
    {
        edible: `hamburger`,
        isVegan: false
    },
    {
        edible: `fries`,
        isVegan: true
    },
    {
        edible: `ice cream`,
        isVegan: true
    },
    {
        edible: `taco`,
        isVegan: true
    }
];

// logging the items that are for vegans using a standard function declaration
console.log(
    edibles.filter(function(item) {
        return item.isVegan;
    })
);

// logging the items that are for vegans using the arrow function declaration. Syntax is brief
console.log(edibles.filter(item => item.isVegan));

// There has been an issue with the rescoping of the this keyword
// If the this keyword (current instance) is not passed to that as a const, the value of firstName ends up undefined
// This is because the this keyword is rescopped at the moment the code is run
const user = {
    firstName: `John`,
    lastName: `Doe`,
    lazyGreet: function() {
        const that = this;
        setTimeout(function() {
            console.log(`Hey there, ${that.firstName}`);
        }, 1000);
    }
};

// The problem of rescoping is fixed with the arrow function
const userArrow = {
    firstName: `John`,
    lastName: `Doe`,
    lazyGreet: function( ) {
        setTimeout(( ) => console.log(`Hey there, ${this.firstName}`), 1000);
    }
};

user.lazyGreet();
userArrow.lazyGreet();
