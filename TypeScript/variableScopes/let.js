for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); // outside of the block also available functional scope
for (var j = 0; j < 10; j++) {
    console.log(j);
}
//console.log(j); //out side of the block let variable cant be accessible block scope
