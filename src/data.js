// MANIPULACION DE LA DATA

const json = 'https://raw.githubusercontent.com/lindatablerosgessner/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
// const json = 'https://api.myjson.com/bins/nslqe';


// FUNCION CON FETCH
// FETCH= "trae" el data del servidor...Si la petición es exitosa, entoncesla función(.then) traerá una respuesta(response)
// en formato JSON. ".json" traduce ese formato. Si la primera promesa(función) es cumplida(true), se pasa a la
// segunda promesa(función ".then") de agarrar el data(laboratoria)
// window.onload = (json) => {
  window.onload = () => {
    fetch(json)
      .then(response => response.json()) // .json convierte en un objecto usable
      .then(laboratoria => {
        // console.log(laboratoria);
        // computeStudentsStats(laboratoria);
        computeStudentsStats(laboratoria);
        computeGenerationsStats(laboratoria);
        // console.log(computeGenerationStats(laboratoria).generation.campus);
        // drawCampus(laboratoria);
        // drawCampus(laboratoria); // esto llama la data
        // drawGeneration(generation);
      })
    // .catch(error => {
    //   console.log('error'); // CATCH  recibe la orden de ser ejecutado, si las dos promesas anteriores no fueron cumplidas
    // });
  };


window.computeStudentsStats = (laboratoria) => {

  const students = [];

  const student = {
    name: null,
    email: null,
    campus: null,
    generation: null,
    stats: stats
  }

  const stats = {
    status: null,
    completePercentage: null,
    topics: topics
  }

  const topics = {
    completedPercentage: null,
    percentageDuration: null,
    subtopics: subtopics
  }

  const subtopics = {
    completedPercentageSubtopics: null,
    type: null,
    duration: null
  }

};

window.computeGenerationsStats = (laboratoria) => {
  const generations = {
    generationE: null,
    campus: null,
    count: null,
    average: null
  };
// console.log(generation);

for (keyCampus in laboratoria) {

  generations.campus = keyCampus;
  // console.log(keyCampus);
  // console.log(generation.campus);
  const campuses = Object.keys(keyCampus)
  // console.log(campuses);
  // console.log(generation.campus);
  // console.log(generation);
};

const allGenerations = Object.keys(laboratoria.lima.generacion);
    // console.log(generation);
    // console.log(allGenerations);
    // generation.generation = allGenerations;
    // console.log(generation.generation);
    // console.log(generation);
      // if (object.hasOwnProperty(key)) {
      //   const campuses = object[key];
    // }

// const limaGenerations = Object.keys(laboratoria.lima.generacion);
const allGenerations = (laboratoria[keyCampus].generacion);
// console.log(laboratoria[keyCampus].generacion);

for (keyGen in allGenerations) {
  generations.generation = keyGen;
  // console.log(generations);
}

const students = (laboratoria[keyCampus].generacion[keyGen].estudiantes); //ARREGLO DE ESTUDIANTES!!!!
// console.log(students[keyGen].estudiantes);
// console.log(students);

generations.count = students.length
// console.log(generations);


};




// for (keyGen in allGenerations) { 
//   // console.log(allGenerations);
//   // console.log(generation);
//     // console.log(laboratoria[key][keyGen]);
//     generations.generation = keyGen;
//     // console.log(generation.generation);
//     // console.log(laboratoria[keyCampus][keyGen]);
//     // generations.count = laboratoria[keyCampus].generacion[keyGen].estudiantes.length;
//     console.log(laboratoria[keyCampus].generacion[keyGen].estudiantes.length);
//     // console.log(generations.count);
//     let students = laboratoria[keyCampus].generacion[keyGen].estudiantes; // ESTO ES EL ARREGLO DE ESTUDIANTES !!!!!!
//     // students.forEach((student) => { ????
//     //   console.log(students.progreso.porcentajeCompletado);

//     let totalSum = students.reduce((prev, current) => {
//       return prev + current.progreso.porcentajeCompletado;
//     }, 0);
//     generations.average = Math.round(totalSum / generations.count);
//     // console.log(generations);
//     arrayGenerations.push(generations);
//   }

//   console.log(arrayGenerations);

//   return arrayGenerations;






window.sortStudents = (laboratoria) => {};

window.filterStudents = (laboratoria) => {};





// sortStudents(students, orderBy, orderDirection)
// La función sortStudents() se encarga de ordenar la lista de estudiantes creada con computeStudentsStats() en base a orderBy y orderDirection.

// Argumentos
// students: Arreglo de objetos creado con computeStudentsStats().
// orderBy: String que indica el criterio de ordenado. Debe permitir ordenar por nombre y porcentaje de completitud.
// orderDirection: La dirección en la que queremos ordenar. Posibles valores: ASC y DESC (ascendente y descendente).
// Valor de retorno
// Arreglo de estudiantes ordenado.


// // EXPLICACION DE AMALIA
// window.computeStudentsStats = () => {

// };

// window.computeGenerationStats = () => {
//   // DEVOLVER UN NUEVO ARREGLO DE OBJETOS GENERATIONS
//   const generations = {
//     generation: null,
//     campus: null,
//     count: null,
//     average: null
//   };
//   for (key in laboratoria) {
//     // console.log(Object.key);// acceder a la propiedad del objeto 
// // object key regresa un arreglo KEY AQUI ES UNA VARIABLE
//     generations.campus = key;
//     for (item in laboratoria[key].generacion) {
//       // console.log(laboratoria[key][item]);
//       generations.generation = item;
//       generations.count = laboratoria[key].generacion[item].estudiantes.length;
//       // console.log(laboratoria[key].generacion[item].estudiantes.length);
//       let students = laboratoria[key].generacion[item].estudiantes; // ESTO ES UN ARREGLO DE ESTUDIANTES
//       // students.forEach((student) => {
//       //   console.log(students.progreso.porcentajeCompletado);
//       let sumaTotal = students.reduce((prev, current) => {
//         return prev + current.progreso.porcentajeCompletado;
//       }, 0);
//       generations.average = Math.round(sumaTotal / generations.count);
//       console.log(generations);
//       // arrayGenerations.push(generations);
//     };
//   };
//   console.log(arrayGenerations);

//   return arrayGenerations;
// };