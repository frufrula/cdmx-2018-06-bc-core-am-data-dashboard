//MANIPULACION DE LA DATA

const json = "https://raw.githubusercontent.com/lindatablerosgessner/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";


//FUNCION CON FETCH
//FETCH= "trae" el data del servidor...Si la petición es exitosa, entoncesla función(.then) traerá una respuesta(response)
// en formato JSON. ".json" traduce ese formato. Si la primera promesa(función) es cumplida(true), se pasa a la
//segunda promesa(función ".then") de agarrar el data(laboratoria)
window.onload = () => {
  fetch(json)
    .then(response => response.json())    // .json convierte en un objecto usable
    .then(laboratoria => {
      console.log(laboratoria);
      drawCampus(laboratoria);
    })
    .catch(error => {
      console.log("error");  //CATCH  recibe la orden de ser ejecutado, si las dos promesas anteriores no fueron cumplidas
    })

};




//INVOCAR FUNCION CON FETCH sede
const drawCampus = (laboratoria) => {
  console.log(laboratoria);

  if (select1.option1.value && select2.option1.value) {
    // ve a la segunda poagina y despliega info de lima 6ta generacion
  }



  // solo imprimir campuses!!!!!

  //?? CREATE ELEMENT
  let printData = document.createTextNode(laboratoria);                   // crea un nodo de texto de la data
  prueba.appendChild(printData);                                        // añadir la data en formato texto al <p id=prueba>
  // RETURN,........!!!!
  // metodo: convertir Json  laboratoria.Json();

};






//como iterar y target lo que queremos imprimir
//llamar caja donde va el elemento
//Crear elemento para meter el data 
// decirle al elemento que valor va a tomar     adjacent
//decirle al elemento que se meta al div


// investigar Return
// pasar valores de una funciona a otra
//EVENT.TARGET
//RECIBIR OPCIÓN
