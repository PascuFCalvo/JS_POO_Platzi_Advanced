const objeto = {
   name: 'Objeto',
   email:"objeto@mail.com",
   age: 30,
};

Object.keys(objeto);
// ["name", "email", "age"]

Object.values(objeto);
// ["Objeto", "objeto@mail", 30]

Object.entries(objeto);
// [["name", "Objeto"], ["email", "objeto@mail"], ["age", 30]]

Object.getOwnPropertyNames(objeto);
// ["name", "email", "age"]

Object.getOwnPropertyDescriptors(objeto);

let print = console.log(Object.getOwnPropertyDescriptors(objeto));