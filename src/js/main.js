// MANIPULACION DEL DOM

const cardSelector = document.getElementById('card-form');
let card = document.getElementById('card-link');

card.addEventListener('click', (toggleCard) => {
  if (cardSelector.style.display === 'none') {
    cardSelector.style.display = 'block';
  } else {
    cardSelector.style.display = 'none';
  }
});





// const container = document.getElementById('container')
// const selectCampus = document.getElementById('selectCampus')

// const campusSelector = (laboratoria) => {

//   selectCampus.addEventListener('change', (event) => {

// // console.log(event.target.selectedIndex);
// const index = event.target.selectedIndex;
// // guardar eso en una variable y luego 
// console.log(event.target[index]);

//         let result = '';
//         console.log(Object.values(laboratoria)[0])
//         const info = Object.values(laboratoria)[0];

//         for (let i = 0; i < laboratoria.length; i++) {
//             console.log(laboratoria[i].progress.javascript)
//             result += `<h3>Estudiantes</h3>
//             <table class="table table-hover table-dark">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Nombre</th>
//                   <th scope="col">LMS Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>${laboratoria[i].name}</td>
//                   <td>${laboratoria[i].progress.javascript}</td>
//                 </tr>
//               </tbody>
//             </table>`
//         }
//         container.innerHTML = result;
//     });
// }




// // EXPLICACION DE AMALIA
// window.onload = () => {
//   fetch('../data/laboratoria.json').then((response)=>{ // sintactic sugar: .then(response=>response.json())
//     return response.json();
//   }).then((data)=>{
//     listeners(data);
//   }).catch(()=>{

//   });
// };

// const listeners = (datita) => {
//   const buttons = document.getElementsByClassName('buttons'); // Coleccion HTML
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//       // console.log(datita);
//       let students = computeStudentsStats(datita); // esta funcion se encarga de retornar el nuevpo arrgelo de estudiantes
//       let generations = computeGenerationStats(datita);
//       drawGenerations(generations);
//     });
//   }
// };

// const select
// CONST listeners = (DATITA) => {
//   document. getElementById("select")
//   .addEventListener('change', (event) => {
//     // console.log(event.target.selectedIndex);
//     const index = event.target.selectedIndex;
//     // guardar eso en una variable y luego 
//     console.log(event.target[index]);
//   });
// };