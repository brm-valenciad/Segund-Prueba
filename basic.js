var el = document.getElementById("div");
el.addEventListener("click", function(event, docu){
  console.warn("Esta función aparace al final!");
  if ( docu == "init"){
    console.warn("lanzamos la app");
  }
  else{
    console.info("Nos mantenemos en espera...");
  }
});
