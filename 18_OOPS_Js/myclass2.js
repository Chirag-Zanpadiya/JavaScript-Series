class Vehicle {
  constructor(model, noOfDoors, noOfTyres, succ_type) {
    this.model = model;
    this.noOfDoors = noOfDoors;
    this.noOfTyres = noOfTyres;
    this.succ_type = succ_type;
  }

  susspesionType() {
    console.log(`Susspesion Type : ${this.succ_type}`);
  }
}

class Car extends Vehicle {
  constructor(name, model, noOfDoors, noOfTyres  ,succ_type) {
    super(model, noOfDoors, noOfTyres, succ_type);
    this.name = name;
  }
}

let car1 = new Car("G-Wagon", "2024", 4, 4, "wheelie");
car1.susspesionType();
