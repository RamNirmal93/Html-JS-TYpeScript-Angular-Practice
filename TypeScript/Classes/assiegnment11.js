var Organizer1 = /** @class */ (function () {
    function Organizer1(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer1.prototype.display = function () {
        console.log(this.id, +" " + this.name);
    };
    Object.defineProperty(Organizer1.prototype, "ids", {
        get: function () {
            return this.id;
        },
        set: function (ids) {
            this.id = ids;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organizer1.prototype, "names", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Organizer1;
}());
var Event1 = /** @class */ (function () {
    function Event1(id, name, desc, startT, EndT) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.startTime = startT;
        this.EndTime = EndT;
    }
    Event1.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.startTime + " " + this.EndTime);
    };
    Object.defineProperty(Event1.prototype, "ids", {
        get: function () {
            return this.id;
        },
        set: function (ids) {
            this.id = ids;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event1.prototype, "names", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event1.prototype, "descriptions", {
        get: function () {
            return this.description;
        },
        set: function (desc) {
            this.description = desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event1.prototype, "startT", {
        get: function () {
            return this.startTime;
        },
        set: function (ST) {
            this.startTime = ST;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event1.prototype, "EndT", {
        get: function () {
            return this.EndTime;
        },
        set: function (ET) {
            this.EndTime = ET;
        },
        enumerable: false,
        configurable: true
    });
    return Event1;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, desc, Address) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.Address = Address;
    }
    Venue.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.Address);
    };
    Object.defineProperty(Venue.prototype, "ids", {
        get: function () {
            return this.id;
        },
        set: function (ids) {
            this.id = ids;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "names", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "descriptions", {
        get: function () {
            return this.description;
        },
        set: function (desc) {
            this.description = desc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "address", {
        get: function () {
            return this.Address;
        },
        set: function (add) {
            this.Address = add;
        },
        enumerable: false,
        configurable: true
    });
    return Venue;
}());
var org = new Organizer1(3, "Yogesh");
org.display();
var event2 = new Event1(3, "Yogesh", "Cloud Event", "9AP", "11PM");
event2.display();
var venue = new Venue(3, "Yogesh", "Venu ", "Mumbai");
venue.display();
