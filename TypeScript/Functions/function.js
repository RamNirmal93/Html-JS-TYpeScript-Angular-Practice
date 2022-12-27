function hello(name) {
    return ("hello " + name);
}
console.log(hello("nirmal"));
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
//optional parameter
function display(id, name, role) {
    console.log("Id ", id);
    console.log("Name ", name);
    if (role != undefined) {
        console.log("Role ", role); // make sure role not returns undefined
    }
}
display(1, "sai");
display(2, "ram", "admin");
//default parameter
function display1(id, name, role) {
    if (role === void 0) { role = "customer"; }
    console.log("Id ", id);
    console.log("Name ", name);
    console.log("Role ", role);
}
display1(1, "sai"); // default role is assigned
display1(2, "ram", "admin"); //here role is over rides to admin
//Function as a parameter
function calculator(fun) {
    console.log(fun(50, 30));
}
calculator(add);
//Returning a function
function calculator1() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
var sub = calculator1();
console.log(sub(20, 5));
console.log(calculator1()(100, 10)); //another method
//Anonymous function
var hello1 = function (name1) {
    return "hello " + name1;
};
console.log(hello1("nirmal"));
