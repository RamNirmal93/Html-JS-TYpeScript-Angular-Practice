var Employee = {
    id: 1,
    lname: "ram",
    salary: 1000
};
for (var item in Employee) {
    console.log(Employee[item]);
}
var id = Employee.id, lname = Employee.lname, salary = Employee.salary;
console.log(id, lname, salary);
