var Student = /** @class */ (function () {
    function Student() {
        this.college = "vit";
        this.grade = "B";
    }
    Student.prototype.display = function () {
        console.log(this._lname);
    };
    Object.defineProperty(Student.prototype, "lname", {
        get: function () {
            return this._lname;
        },
        set: function (_lname) {
            this._lname = this.lname;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var student = new Student();
student.name = "john";
student.college = "NIT";
// student.grade=`A` // we cant change the read only variable
student.lname = "chris";
console.log(student.lname = "ram");
