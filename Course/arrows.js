function greetUser(name) {
    console.log("Hello there, " + name + "!");
}
var greetUserByName = function (name) {
    console.log("Hello there, " + name + "!");
};
greetUser("John");
greetUserByName("Jane");
// Arrow Functions
var greetUserByNameArrow = function (name) {
    return console.log("Hello there, " + name + "!");
};
greetUserByNameArrow("Jacob");
// Declaration of edibles array to be used in two lines that do the same thing, but one uses an arrow function
var edibles = [
    {
        edible: "pizza",
        isVegan: false
    },
    {
        edible: "hamburger",
        isVegan: false
    },
    {
        edible: "fries",
        isVegan: true
    },
    {
        edible: "ice cream",
        isVegan: true
    },
    {
        edible: "taco",
        isVegan: true
    }
];
// logging the items that are for vegans using a standard function declaration
console.log(edibles.filter(function (item) {
    return item.isVegan;
}));
// logging the items that are for vegans using the arrow function declaration. Syntax is brief
console.log(edibles.filter(function (item) { return item.isVegan; }));
// There has been an issue with the rescoping of the this keyword
// If the this keyword (current instance) is not passed to that as a const, the value of firstName ends up undefined
// This is because the this keyword is rescopped at the moment the code is run
var user = {
    firstName: "John",
    lastName: "Doe",
    lazyGreet: function () {
        var that = this;
        setTimeout(function () {
            console.log("Hey there, " + that.firstName);
        }, 1000);
    }
};
// The problem of rescoping is fixed with the arrow function
var userArrow = {
    firstName: "John",
    lastName: "Doe",
    lazyGreet: function () {
        var _this = this;
        setTimeout(function () { return console.log("Hey there, " + _this.firstName); }, 1000);
    }
};
user.lazyGreet();
userArrow.lazyGreet();
