var Employee ={
    id: 1,
    lname:`ram`,
    salary:1000
}

for(let item in Employee){
    console.log(Employee[item]);
}

var {id,lname,salary} = Employee;
console.log( id, lname ,salary);