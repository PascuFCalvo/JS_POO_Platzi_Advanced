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

Object.defineProperty(juan, "pruebaNasa", {
  value: "extraterrestre",
  enumerable: false,
  writable: false,
  configurable: false,
});

Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  enumerable: false,
  writable: true,
  configurable: true,
});

Object.defineProperty(juan, "editor", {
  value: "VSCode",
  enumerable: true,
  writable: false,
  configurable: true,
});

Object.defineProperty(juan, "terminal", {
  value: "WSL",
  enumerable: true,
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));

console.log(juan);
console.log(Object.keys(juan)); //enumerable false no se muestra
console.log(Object.getOwnPropertyNames(juan)); //enumera todas las propiedades aun en false

juan.navigator = "Firefox"; //podemos modificarla porque esta writable true
juan.editor = "Atom"; //no podemos modificarla porque esta writable false, pero si pdemos eliminara con delete

delete juan.terminal //no podemos eliminarla porque esta configurable false


Object.seal(juan);
//pone todas las configurabe a false

Object.freeze(juan);
//pone todas las writable a false

