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

function isObject(subject) {
  return typeof subject == "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}

//la funcion recibe un element, puede ser lo que sea
function deepCopy(subject) {
  //creamos una variable vacia
  let copySubject;
  //validamos si es un objet, un array u otra cosa
  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);
  //si es un array, creamos un array vacio
  if (subjectIsArray) {
    copySubject = [];
  }
  //si es un objeto, creamos un objeto vacio
  else if (subjectIsObject) {
    copySubject = {};
  }
  //si no es ni un objeto ni un array, devolvemos el elemento
  else {
    return subject;
  }
  //vamos a recrrer todas las propiedades del elemento que nos pasen
  for (key in subject) {
    //validar si la propiedad es un objeto
    const keyIsObject = isObject(subject[key]);
    //si es un objeto, llamamos a la funcion deepCopy y le pasamos el objeto
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
      //si no es un objeto y es un array con el metodo push, añadimos el elemento al array
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        //si no es un objeto ni un array copiamos directamanete el elemento
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}
