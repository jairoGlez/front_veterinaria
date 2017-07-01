$(document).ready(function(){
  $("#guardar").click(function(){
    console.log("boton")
    $.ajax({
      url:"http://127.0.0.1:5000/agregarDueño",
      data: $("#registro").serialize(),
      type: "POST",
      success: function(respuesta){
        console.log(respuesta)
        window.alert("Guardado")
        document.getElementById("registro").reset()
      },
      error: function(respuesta){
        console.log(respuesta)
        window.alert("Error")
      }
    })
  })
})
