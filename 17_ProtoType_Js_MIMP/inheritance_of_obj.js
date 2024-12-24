let Vehicle = {
  model: "2008",
  getSuccpensionType: function () {
    console.log(`Wellie`);
  },
};

let Car = {
  noOfDoors: 4,
  getNoOfDoors: function () {
    console.log(`noofDoors is : ${this.noOfDoors}`);
  },

  //   __proto__: Vehicle, // isko likh te hi sare properties of the Vehicle asseecsss by the Ccar
};
Object.setPrototypeOf(Car, Vehicle); // Car Ke andar set kardo Vehicle ki properties
console.log(Car.model);
