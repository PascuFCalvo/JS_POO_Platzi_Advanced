const juan = {
  name: "juanito",
  age: 25,
  approvedCourses: ["Curso 1"],

  addCourse(newCourse) {
    console.log("this", this);
    this.approvedCourses.push(newCourse);
    console.log("this.approvedCourses", this.approvedCourses);
  },
};

juan.addCourse("Curso 2");

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.entries(juan)[3]);
console.log(Object.entries(juan)[3][0]);
console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "prueba", {
  value: "Prueba",
  enumerable: true,
  writable: true,
  configurable: true,
});
