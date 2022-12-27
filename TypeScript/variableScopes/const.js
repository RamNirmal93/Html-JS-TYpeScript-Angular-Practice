var product = function (x, y) {
    return x * y;
};
//another developer
var product = function (x, y) {
    return x + y;
};
//to avoid these type of ambiguity we declare as const then it cant be overrided;
var product1 = function (x, y) {
    return x * y;
};
console.log(product1);
