function calPrecioFinal() {
  console.log("ingreso a calcular precio");

  //en cantEnt almacenamos la cantidad de entradas que ingreso el usuario
  let cantEnt=document.getElementById("cantEntradas").value; 
  console.log("cantEnt: " + cantEnt);

  // en porcDesc almacenamos el porcentaje de descuento que selecciono el usuario
  let porcDesc=document.getElementById("porcDescuento").value;
  console.log("porcDesc: " + porcDesc);

  //en descuento almacenamos los pesos totales a descontar
  let descuento=(cantEnt*200) * porcDesc/100;
  console.log("descuento: " + descuento);

  //en precioTotal está el valor de las entradas x cant menos el descuento en pesos
  let precioTotal=(cantEnt*200) - descuento;
  console.log("preciototal: " + precioTotal);

  
  // modificando dinámicamente el html para colocar el precio total en la pantalla
  document.getElementById("valorTotal").value=precioTotal;
}

function borrarFormulario() {
  document.getElementById("miFormulario").reset();
}



function scrollToSection() {
  const section = document.getElementById("ticket");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection() {
  const section = document.getElementById("conOrador");
  section.scrollIntoView({ behavior: "smooth" });
}