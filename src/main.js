




// const fbtn = document.getElementById("fetchbtn");


fbtn.addEventListener("change", function() {

    // let requestJson = new XMLHttpRequest();
    // requestJson.open("GET", "https://github.com/lindatablerosgessner/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/data/laboratoria.json");
    // requestJson.onload = () => {
        // console.log(requestJson.responseText);
        let jsonData = JSON.parse(requestJson.responseText);
}
requestJson.send();
});



const printJsonToHtml = (data) => {
    let printGenerations = "";
    let testPrint = document.getElementById("print-html");

};








// function preload() {
//     jsonData = loadJSON(".../data/laboratoria.json")
// }

// * Listar y poder seleccionar generaciones
//   * Para cada generación:
//     * Listar y poder seleccionar estudiantes mostrando porcentaje general de completitud de c/estudiante
    
// function setup() {
//     console.log(jsonData)
// }
    
    












    
//     * Seleccionar estudiantes mostrando reporte de progreso:
//         * Mostrar porcentaje de completitud de todos los temas
//         * Calcular porcentaje de tiempo completado de cada tema
//         * Listar subtemas de cada tema
//         * Poder filtrar subtemas completados y no-completados de cada tema
//         * Poder filtrar subtemas por tipos (ejercicios, lecturas y quizzes)
//   * En la vista de cada generación mostrar reporte de:
//     * Promedio de la generación
//     * Generar status para identificar estudiantes debajo del 60 en su porcentaje de completitud
//     * Generar status para identificar estudiantes con 90 o más en su porcentaje de completitud
//     * Poder filtrar estudiantes por estos dos status
//     * Filtrar y poder buscar estudiantes por nombre
//     * Poder ordenar de manera ascendente y descendente a las estudiantes según
//     porcentaje de completitud 
