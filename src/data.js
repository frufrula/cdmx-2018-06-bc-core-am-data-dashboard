//MANIPULACION DE LA DATA

const json = "https://raw.githubusercontent.com/lindatablerosgessner/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";


//FUNCION CON FETCH
window.onload = () => {
    fetch(json)
    .then(response => response.json())    //toma el json, esperar una respuesta, .json traduce
    .then(laboratoria => {
        // console.log(laboratoria);
        drawCampus(laboratoria); //funcion fantasma, imprime json en consola
    })
    .catch(error => {
        console.log("error");
    })
    
};


//INVOCAR FUNCION CON FETCH sede
const drawCampus = (laboratoria) => {
    console.log(laboratoria);

    // metodo: convertir Json  laboratoria.Json();

};







//PINTAR EN FETCH

//EVENT.TARGET

//RECIBIR OPCIÓN
