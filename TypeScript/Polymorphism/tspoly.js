var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.print = function () {
        console.log("Employee details");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(fName, lName, designation) {
        var _this = _super.call(this) || this;
        _this.fName = fName;
        _this.lName = lName;
        _this.designation = designation;
        return _this;
    }
    Manager.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.fName, " ").concat(this.lName, " - ").concat(this.designation));
    };
    return Manager;
}(Employee));
var Lead = /** @class */ (function (_super) {
    __extends(Lead, _super);
    function Lead(fName, lName, designation) {
        var _this = _super.call(this) || this;
        _this.fName = fName;
        _this.lName = lName;
        _this.designation = designation;
        return _this;
    }
    Lead.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.fName, " ").concat(this.lName, " - ").concat(this.designation));
    };
    return Lead;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(fName, lName, designation) {
        var _this = _super.call(this) || this;
        _this.fName = fName;
        _this.lName = lName;
        _this.designation = designation;
        return _this;
    }
    Developer.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("".concat(this.fName, " ").concat(this.lName, " - ").concat(this.designation));
    };
    return Developer;
}(Employee));
var emp = new Array(new Manager("Naga", "Raj", "Manager"), new Lead("Chaminda", "P", "Lead"), new Developer("nirmal", "p", "Developer"));
for (var _i = 0, emp_1 = emp; _i < emp_1.length; _i++) {
    var employee = emp_1[_i];
    employee.print();
}
