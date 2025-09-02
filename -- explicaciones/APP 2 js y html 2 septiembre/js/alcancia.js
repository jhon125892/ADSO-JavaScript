// exporta todo, solo puede existir solo un export deafault por archivo
// se usa para exportar clases, funciones, variables
// se importa sin llaves {}
// se puede renombrar al importar
// se puede tener solo un export default por archivo
// recomendacion 

// la clase solamente 
export default class alcancia{
    constructor(){
        this.moneda200=0;
        this.moneda500=0;
        this.moneda1000=0;
    }
    agregarmoneda200(){
        this.moneda200++;
    }
    agregarmoneda500(){
        this.moneda500++;
    }
    agregarmoneda1000(){
        this.moneda1000++;
    }
    /**
     * 
     * calcula la cantidad de dinero 
     * ahorrado en la alcancia
     * @returns int 
     */

    cantidadtotalahorrado(){
        const total  = this.moneda200*200+
            this.moneda500*500+
            this.moneda1000*1000;
        return total;
    }
    
}