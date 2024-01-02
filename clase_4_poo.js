const juanita = {
  age: 15,
  email: "juantia@mail.com",
};

const nath = juanita;

console.log(juanita, nath);

nath.email = "nath@mail.com";
nath.age = 20;

//si hago esto, nath y juanita apuntan al mismo objeto, por lo que si modifico uno, modifico el otro
