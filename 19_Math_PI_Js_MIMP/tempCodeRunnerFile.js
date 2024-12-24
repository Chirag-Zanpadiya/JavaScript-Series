let obj = {
  username: "Zanpadiya Chirag",
  email: "zanpadiyachirag@gmail.com",
  pass: "123@gmail.com",
  getid: function () {
    console.log("Id : 149");
  },
};

Object.defineProperty(obj, "pass", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj, "pass"));

for (const key in obj) {
  if (typeof obj[key] !== "function") {
    console.log(`Key : ${key} , Values : ${obj[key]}`);
  }
}
