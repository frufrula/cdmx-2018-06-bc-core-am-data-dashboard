const json = "https://raw.githubusercontent.com/lindatablerosgessner/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json"

window.onload = () => {
    fetch(json)
    .then(response => response.json())    //toma el json
    .then(data => {
        console.log(data);
        readyJson(data);
    })
    .catch(error => {
        console.log("error");
    })
}