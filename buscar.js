$(document).ready(function(){
    $("#boton").click(function(){
        console.log("click")

        limpiar()

        $.ajax({
            url:"http://127.0.0.1:5000/buscar",
            data: $("#correo").serialize(),
            type: "POST",
            success: function(respuesta){
                console.log(respuesta)
                mostrarResultados(respuesta)
            },
            error: function(respuesta){
                console.log(respuesta)
            }
        })
    })
})

function mostrarResultados (respuesta){
    $.each(respuesta, function(index,valor){
        var fila = "<tr id='datos'>"
        fila += "<td>" + valor["correo"] + "</td>"
        fila += "<td>" + valor["nombre"] + "</td>"
        fila += "<td>" + valor["apellido1"] + "</td>"
        fila += "<td>" + valor["apellido2"] + "</td>"
        fila += "<td>" + valor["colonia"] + "</td>"
        fila += "<td>" + valor["domicilio"] + "</td>"
        fila += "<td>" + valor["telefono"] + "</td>"
        fila += "<td>" + valor["password"] + "</td>"
        fila += "<td>" + valor["foto"] + "</td>"
        fila += "</tr>"

        $("#resultados").append(fila)
    })
}

function limpiar (){
  $("#resultados").find("tr[id='datos']").each(function(index,value){
      value.remove()
  })
}
