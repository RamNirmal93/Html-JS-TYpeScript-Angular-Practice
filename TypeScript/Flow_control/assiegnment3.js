var data = prompt("enter a number");
var x = parseInt(data);
for (var i = 0; i <= x; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}
var z = 0;
while (z <= x) {
    console.log(z++);
}
