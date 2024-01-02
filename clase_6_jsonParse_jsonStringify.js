//json.stringify() convierte un objeto en un string
//json.parse() convierte un string en un objeto

const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = AAAAAA;
  },
};

const stringifiedComplexObject = JSON.stringify(obj1);

console.log(stringifiedComplexObject);

const obj2 = JSON.parse(stringifiedComplexObject);

console.log(obj2);

obj1.a = "AAAAAAAA";
obj1.c.d = "DDDDDDDD";

console.log(obj1);
console.log(obj2); //no se modifico porque es un nuevo objeto, no es una referencia al objeto original

//esto mola , pero peta cuando trabajamos con metodos, ya que no se pueden convertir en string
//asi que necesitamos deep copy y recursividad
