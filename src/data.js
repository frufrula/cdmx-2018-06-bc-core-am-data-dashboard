const labDataBase = "https://github.com/lindatablerosgessner/cdmx-2018-06-bc-core-am-data-dashboard/blob/master/data/laboratoria.json"
const labDataBase = "https://raw.githubusercontent.com/lindatablerosgessner/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
$(document).ready(function(){

    const  usuario = "lucile";
    const  contrasenia = "administrador";
    
       var request = new Request(labDataBase);
    
        let datos = fetch(request).then(function(response) {
                return JSON.stringify(response);
            }).catch(function(error) {  
                console.log('Request failed', error)  
            });
    $(".dataSource").text(request.lima);
    
    console.log("dataResponse :::" + datos);
    
    console.log(""+request.lima);
    
    //console.log("debug  data :::::" + request.lima);
    
    
    
    $(".login-button").click(function(event){
        
        event.preventDefault();
    
     var  usuarioDefinido  = $("#usuarioCapturado").text();
     var  passwordDefinido = $("#contraseniaCapturada").text();
    
            if( usuarioDefinido.length > 4 &&  usuarioDefinido.text() == usuario ){
                alert("correcto");
            }
    
    });
    
    
    $(".login-boxes").ready(function(){
    
        $(".login-boxes-selector").fadeOut("slow",function(){
    
        });
    
    });
    
    
    function leerJSON(){
    
    }
    
    
    
    });