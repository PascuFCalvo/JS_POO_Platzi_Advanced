//esta funcion es basiacmente un while, pero con recursividad

//while(numero < 5){
//   console.log(numero);
//   numero++;
//}

//es importante que la funcion tenga un caso base, es decir, un caso en el que la funcion no se llame a si misma en este cas, cuando numero sea 5

function recursiva(numero) {
  console.log(numero);
  if (numero < 5) {
    return recursiva(numero + 1);
  } else {
    return 5;
  }
}

//recursiva(0);

const numbersArray = [1, 2, 3, 4, 5];

function recursiveNumber(numbersArray) {
  if (numbersArray.length !== 0) {
    const firtsNumber = numbersArray[0];
    console.log(firtsNumber);
    //al ir eliminando el primer numero del array, el array se va acortando, por lo que el caso base es cuando el array este vacio
    numbersArray.shift();
    return recursiveNumber(numbersArray);
  }
}

recursiveNumber(numbersArray);
