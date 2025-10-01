let hoy = new Date();
console.log("Hoy es: " + hoy.toDateString());


function diasParaNavidad() {
  let hoy = new Date();
  let navidad = new Date(hoy.getFullYear(), 11, 25); // 25 de diciembre
  if (hoy > navidad) {
    navidad.setFullYear(hoy.getFullYear() + 1);
  }
  let diferencia = navidad - hoy;
  let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  console.log("Faltan " + dias + " dias para Navidad");
}
diasParaNavidad();
