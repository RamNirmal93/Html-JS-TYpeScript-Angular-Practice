var student ={
    firstName:"john",
    lastName:"Bailey",
    score:90
}
console.log(student.firstName);
console.log(student.score);

//for in loop

for(let item in student){
    console.log(item);
    console.log(student[item]);
}

var {firstName , lastName} = student
console.log(firstName , lastName);