var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/**
 * The spread operator ( ... ) spreads arrays and objects into single values
 */
// Array
var fruits = ['apple', 'pear', 'grape'];
var food = ['pizza', 'hamburger', 'muffin'];
var edibles = __spreadArrays(fruits, food);
console.log("Got the edibles as: ", edibles);
// Object
var user = {
    firstName: "Siddharth",
    lastName: "Ajmera",
    username: "SiddAjmera"
};
var userDetails = __assign(__assign({}, user), { address: "123 NE St.", email: "b.lopez@mlsdatatools.com" });
console.log("Got the user as: ", userDetails);
// Functions
// Placing a question mark before the colon and the data type makes the argument optional
function add(x, y, z) {
    return x + y + z;
}
var numbers = [1, 2, 3];
console.log("Got the sum of all the numbers as: ", add.apply(void 0, numbers));
// Backticks
console.log('The user with name: ' +
    user.firstName +
    ' has an address of: ' +
    userDetails.address +
    ' and an email of  '
    + userDetails.email);
console.log("The user with name: " + user.firstName + " has an address of: " + userDetails.address + " and an email of " + userDetails.email);
// This syntax stringifies arrays and objects instead of printing them as single items
console.log("Got the edibles as: " + edibles);
// In this case, it doesn't even print the objects
console.log("Got the userDetails as: " + userDetails);
// If you want to print objects and arrays, it's better to use the attach syntax
console.log("Got the edibles as : ", edibles);
console.log("Got the userDetails as: ", userDetails);
// Destructure
var fName = user.firstName, lName = user.lastName;
console.log(fName);
console.log(lName);
// Array Destructure
var apple = fruits[0], greenApple = fruits[1], grapes = fruits[2];
console.log(apple);
console.log(greenApple);
console.log(grapes);
var justApple = edibles[0], restEdibles = edibles.slice(1);
console.log(justApple);
console.log(restEdibles);
var firstName = userDetails.firstName, restUserDetails = __rest(userDetails, ["firstName"]);
console.log(firstName);
console.log(restUserDetails);
function getEdibles(apple) {
    var restEdibles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restEdibles[_i - 1] = arguments[_i];
    }
    console.log(apple);
    console.log(restEdibles);
}
getEdibles.apply(void 0, edibles);
