// protoTypes_insert_new_fns_in_obj

let name = "chirag              ";
let name2 = "               chirag              ";
String.prototype.trueLength = function (){
    console.log(`String is : ${this}`);
    
    console.log(`The True Length of the String is : ${this.trim().length}`);
    
}
name.trueLength();
name2.trueLength();

let myHeros = ["Hulk", "Thor", "Spiderman", "IronMan"];

let herosPower = {
  Thor: "Hammer",
  Spiderman: "Sling",
};

// Insert the properties in the Object

Object.prototype.chirag = function () {
  console.log(`Chirag is present all the where`);
};

Array.prototype.sayChirag = function () {
  console.log(`Chirag's Say Welcome To My Developers`);
};

herosPower.chirag();
myHeros.chirag();
myHeros.sayChirag();
// herosPower.sayChirag(); // obj ke andar ye properties asccess nahi karsakete 
