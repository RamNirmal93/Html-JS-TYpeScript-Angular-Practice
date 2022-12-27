var student = {
    firstName: "john",
    lastName: "Bailey",
    score: 90
};
console.log(student.firstName);
console.log(student.score);
//for in loop
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
var firstName = student.firstName, lastName = student.lastName;
console.log(firstName, lastName);
