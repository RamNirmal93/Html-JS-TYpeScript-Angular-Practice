var maths_data = prompt("Enter maths marks");
var physics_data = prompt("Enter physics marks");
var chemistry_data = prompt("Enter chemistry marks");
var maths = parseInt(maths_data);
var physics = parseInt(physics_data);
var chemistry = parseInt(chemistry_data);
var sum = maths + physics + chemistry;
var average = sum / 3;
if (average > 90)
    console.log("A");
else if (average > 70 && average < 90)
    console.log("B");
else if (average < 70)
    console.log("C");
else
    console.log("D");
