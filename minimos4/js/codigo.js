//Esperanza Rodríguez Martínez
'use strict'

/**
Suma dos números enteros.
@param {String} a Primer sumando.
@param {String} b Segundo sumando.
@return {Number} La suma de a y b.
**/
function sumar(a, b){
    let suma= parseInt(a)+parseInt(b);
    return suma;
}

/**
Comprueba si el valor recibido es un número
@param {Object} a Valor a comprobar.
@return {Boolean} Indica si es un número válido.
**/
function comprobar(a){
    if(!isNaN(a)){
        return true;
    }
    return false;
}

//Función multiplicar
function multiplicar(a,b){
    let multiplicar = a*b;
    return multiplicar;
}
/** Calcula la potencia de un número.
Esta función utiliza la función "multiplicar"
@param {Number} base Base de la potencia
@param {Number} exponente Número natural al que se elevará la base.
@result {Number} Resultado de elevar base a exponente.
**/
function elevar(base, exponente){
    //let resultado=Math.pow(base, exponente);
    let i=0;
    let resultado=1;
    while(i < exponente){
        resultado = multiplicar(resultado, base);
        i++;
    }
    return resultado;
}

/** Genera un array con los 10 primeros números enteros
@result {Array} Array con los 10 primeros números enteros.
**/
function generarArray(){
    let vector= new Array (0,1,2,3,4,5,6,7,8,9);
    return vector;
}

/** Genera un array bidimensional de números aleatorios enteros entre 1 y 100
@param {Number} filas Número de filas del array.
@param {Number} cols Número de columnas del array
@result {Array} Array bidimensional de números aleatorios
**/
function generarArrayBidimensionalAleatorio(filas, cols){
    //Creamos array
    let array=new Array(filas);
    //Recorremos las filas para crear las columnas correspondientes a cada fila
    for (let i = 0; i < filas; i++){
        array[i]=new Array(cols);
    }
    //Bucle para guardar el aleatorio en el array
    for(let i=0; i<filas; i++) {
        for(let j=0; j<cols; j++) {
           array[i][j]=  Math.floor((Math.random() * (100 - 1 + 1)) + 1);
        }
    }
    return array;
}

/** Suma los elementos de un array bidimensional numérico
@param {Array} matriz Array bidimensional numérico.
@return {Number} Suma de los elementos del array.
**/
function sumarArrayBidimensional(matriz){
    let sumador=0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++){
            sumador=sumador+matriz[i][j];
        }

    }
    return sumador;
}

//Clase Factura
class factura{

    constructor (cliente,base,tipoIVA) {

        this.cliente = null;
        this.base = 0;
        this.tipoIVA= 21;
    
        
        this.cliente = cliente;
        this.base = base;
        this.tipoIVA= tipoIVA;
    }

    get cliente() {
        return this.cliente;
    }
    
    set cliente() {
        
    }
    get base() {
        return this.cliente;
    }
    
    set base() {
        
    }
    get tipoIVA() {
        return this.cliente;
    }
    
    set tipoIVA() {
        
    }
    getTotal(base){
        let total=base * 0.21;
        return total;
    }
}