var el = document.getElementById("div");
el.addEventListener("click", function(event, docu){
  console.warn("Esta función aparace al final!");
  if ( docu == "init"){
    console.warn("lanzamos la app");
  var start = document.getElementById("s");
    start.innerhtml("Estamos Ubicando el inicio");
  }
  else{
    console.info("Nos mantenemos en espera...");
  }
  //Añadiendo comentarios y user info.
});
