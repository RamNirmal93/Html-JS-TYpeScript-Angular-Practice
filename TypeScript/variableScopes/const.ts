var product = function(x:number, y:number):number{
    return x*y
}

//another developer
var product = function(x:number, y:number):number{
    return x+y
}

//to avoid these type of ambiguity we declare as const then it cant be overrided;
const product1 = function(x:number, y:number):number{
    return x*y
}
console.log(product1)

// lets do search about declare which is used to mention ambient variables
