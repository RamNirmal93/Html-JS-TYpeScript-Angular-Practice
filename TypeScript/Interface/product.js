var product1 = {
    id: 123,
    name: "iphone",
    description: "its awesome",
    price: 1000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
var product2 = {
    id: 124,
    name: "iphone",
    description: "its awesome",
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
