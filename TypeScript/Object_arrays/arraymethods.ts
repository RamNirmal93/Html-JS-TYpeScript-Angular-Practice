var array1:number[]= [10,20,30,40,50,60,70];

console.log(array1.toString());
console.log(array1.join(" "));
console.log(array1.slice(3,6));
array1.splice(2,5,99,66); //starts at index2 it deletes 5 numbers and inserts 99 & 66
console.log(array1.toString());
array1.push(77,88,99,100);
console.log(array1.toString());
console.log(array1.pop());
console.log(array1.toString());