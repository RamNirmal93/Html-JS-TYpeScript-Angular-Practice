var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id + ' ' + this.name);
    };
    return Organizer;
}());
var Events = /** @class */ (function () {
    function Events(id, name, time) {
        this.id = id;
        this.name = name;
        this.time = time;
    }
    Events.prototype.display = function () {
        console.log(this.id + ' ' + this.name + ' ' + this.time);
    };
    return Events;
}());
var organize = new Organizer(123, 'Ram');
organize.display();
var event1 = new Events(1234, 'Birthday party', 23.59);
event1.display();
