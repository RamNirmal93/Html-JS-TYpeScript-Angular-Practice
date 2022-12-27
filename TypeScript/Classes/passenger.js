var Passenger = /** @class */ (function () {
    function Passenger(fName, lName, frequentFlyerNo) {
        this.fName = fName;
        this.lName = lName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.fName + " " + this.lName + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var passenger = new Passenger("John", "Bailey", 123);
passenger.display();
for (var item in passenger) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
} // one method
var passenger2 = new Passenger("Bob", "christle", 124);
passenger2.display();
for (var item in passenger2) {
    if (passenger2[item] instanceof Function) { //ignores function while executing
        continue;
    }
    else {
        console.log(item);
        console.log(passenger2[item]);
    }
}
