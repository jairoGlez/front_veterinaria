$(document).ready(function(){
  console.log("Listo")
  mostrar()
})

function mostrar(){
  $.ajax({
    url:"http://127.0.0.1:5000/dueños",
    success:function(respuesta){
      imprimirFilas(respuesta)
    },
    error:function(respuesta){
      console.log(respuesta)
    }
  })
}

function imprimirFilas(datos){
  $.each(datos,function(index,valor){
    var row = "<tr>"
    row += "<td>" + valor[0] + "</td>"
    row += "<td>" + valor[1] + "</td>"
    row += "<td>" + valor[2] + "</td>"
    row += "<td>" + valor[3] + "</td>"
    row += "<td>" + valor[4] + "</td>"
    row += "<td>" + valor[5] + "</td>"
    row += "<td>" + valor[6] + "</td>"
    row += "<td>" + valor[7] + "</td>"
    row += "<td>" + valor[8] + "</td>"

    $("#dueños").append(row)
  })
}
