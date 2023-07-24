class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return "Car Is Running Now";
    }
    stop() {
        return "Car Is Stopped";
    }
    data(carNum) {
        return `Car ${carNum} Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
    }
}

let car1 = new Car("BMW", "2022", 1_000_000);
let car2 = new Car("Benz", "2020", 980_000);
let car3 = new Car("Toyota", "2010", 65_000);

console.log(car1.data("One"));
console.log(car1.run());
// Needed Output
/*
    ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
    ("Car Is Running Now");
*/
