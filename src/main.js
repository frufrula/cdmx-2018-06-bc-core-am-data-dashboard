const containerCampus = document.getElementById("resultContainer");


// fbtn.addEventListener("change", function() {  
//     containerCampus = "";
//     JALAR INFO
//     GET FETCH????
//     }
//     containerCampus.insertAdjacentElement("beforeEnd",xxxxx);
// );




// * Listar y poder seleccionar generaciones
//   * Para cada generación:
//     * Listar y poder seleccionar estudiantes mostrando porcentaje general de completitud de c/estudiante


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



const loginButton = document.getElementById("login-button");
let loginDiv = document.getElementById("login-wrapper");
let selectDiv = document.getElementById("select-wrapper");

loginButton.addEventListener("click", (event) => {
    loginDiv.style.display = "none";
    selectDiv.style.display = "block";
});


