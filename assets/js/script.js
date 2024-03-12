$(document).ready(function(){               // Funcion para alerta de rellenar los campos y mensaje enviado con exito
    $("#contacto").submit(function(event){
        event.preventDefault();
        var nombre = $("#nombre").val()
        
        var correo = $("#asunto").val()
        
        var mensaje = $("#mensaje").val()
        if(nombre === "" || correo === "" || mensaje === ""){
            alert("por favor, complete todos los campos")
        }else{
            alert("mensaje enviado con éxito")
        }
    })
}) // Cierre de funcion de alerta
