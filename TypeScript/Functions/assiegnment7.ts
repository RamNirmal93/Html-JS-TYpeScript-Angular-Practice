
var n:number ;

function isPrime(n){
    for(let factor=2; factor < n; factor++)
        if(n % factor === 0)
            return false;
    return true;
}
console.log(isPrime(6));

//using a arrow function
var num = (x:number)=> {
    for (let i =2; i<x;i++){
        if (x%i===0)
            return `not a prime`;
    return 'its a prime'
}}

console.log (num(10));

