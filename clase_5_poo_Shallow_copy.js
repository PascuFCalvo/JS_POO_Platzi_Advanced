const obj1 = {
   a : "a" ,
   b : "b" ,
   c: {
      d: "d" ,
      e: "e"
   }
};

const obj2 = {};

// Shallow copy, creamos una copia del objeto 1 en el objeto 2

//este metdo no sirve para objetos que tienen objetos dentro, porque si modificamos el objeto dentro del objeto, se modifica en ambos objetos
for (prop in obj1) {
   obj2[prop] = obj1[prop];
}

obj2.a = "AAAAAAAA";

console.log(obj1);
console.log(obj2);

//esto pasara igual con objetc.assign, porque tambien es una shallow copy

const obj3 = Object.assign({}, obj1);

//vamos a solucionar est con Object.create

const obj4 = Object.create(obj1);

//podemos acceder a todas porque estan en __proto__ y podemos cambiar y reasignar los valores de las propiedades

//si modificas el objeto original, se modificara en el objeto creado con Object.create