var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "BOA";
        console.log(Check.bankName);
    };
    Check.bankName = "Bank of america";
    return Check;
}());
var check = new Check();
console.log(Check.bankName);
check.accNo;
check.display();
var check1 = new Check();
Check.bankName = "BOA";
console.log(Check.bankName);
check1.accNo;
check1.display();
