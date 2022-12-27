var hello = function () {
    return "hello";
};
console.log(hello());
//passing parameters
var hello1 = function (name) {
    return "hello " + name;
};
console.log(hello1('Sai'));
//multiply
var multiply = function (num1, num2) { return num1 * num2; };
console.log(multiply(9, 8));
//array of arrow functions
var array1 = [];
for (var i = 0; i < 10; i++) {
    array1.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(array1[i]());
}
