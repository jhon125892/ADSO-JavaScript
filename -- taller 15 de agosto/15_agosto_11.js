function capitalDePais(pais) {
    let mapa = new Map();
    mapa.set("Mexico", "Ciudad de Mexico");
    mapa.set("España", "Madrid");
    mapa.set("Brasil", "Brasilia");
    mapa.set("Argentina", "Buenos Aires");
    mapa.set("Egipto", "El Cairo");
    mapa.set("Italia", "Roma");
    mapa.set("Alemania", "Berlin");
    mapa.set("India", "Nueva Delhi");
    mapa.set("Corea del Sur", "Seul");
    mapa.set("Portugal", "Lisboa");

    return mapa.get(pais);
}

console.log(capitalDePais("España"));
console.log(capitalDePais("Italia"));
console.log(capitalDePais("Mexico"));
