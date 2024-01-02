function isObject(subject) {
  return typeof subject == "object";
}
function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },

  //metodo para añadir un curso
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },

  //metodo para añadir un learningPath
  addLearningPath(newLearningPath) {
    this.learningPaths.push(newLearningPath);
  },
};

const juan = deepCopy(studentBase);
Object.seal(juan); //para evitar que se puedan borrar las propieades

Object.isSealed(juan); //para saber si esta sellado, entonces se puede hacer un if para que no se pueda borrar
Object.isFrozen(juan); //para saber si esta congelado, entonces se puede hacer un if para que no se pueda modificar ni borrar


//ahora ya podemos añadir valeores a las propiedades
juan.name = "Juanito";
juan.email = "Juan@mail.com";
juan.age = 25;
juan.approvedCourses = [];
juan.learningPaths = [];
juan.socialMedia.twitter = "@juanito";
juan.socialMedia.instagram = "@juanito";
juan.socialMedia.facebook = "@juanito";

