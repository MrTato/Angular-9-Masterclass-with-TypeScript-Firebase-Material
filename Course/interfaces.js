// For Objects
var user = {
    firstName: "",
    age: 10,
    walk: function () {
        return;
    }
};
// For clases
var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = "";
        this.age = 10;
    }
    Employee.prototype.walk = function () {
        return;
    };
    return Employee;
}());
