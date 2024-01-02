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

//RORO recibe un objeto , retorna un objeto


function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}




function createStudent(
  {
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {} //si no recibe nada, por defecto es un objeto vacio , para evitar crasheos en la ejecucion
) {
  return {
    name,
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const juan = createStudent({
  name: "Juanito",
  age: 25,
  email: "juanito@mail.com",
  twitter: "fjuandc",
  instagram: "fjuandc",
  facebook: undefined,
});

console.log(juan);
