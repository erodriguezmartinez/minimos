'use strict'
//Minimos 6
window.onload=iniciar;

function iniciar(){
    //Ejercicio 1.1
    let valorE11 = comprobarE11();
    console.log(valorE11);
    //Ejercicio 1.2
    comprobarE12();
    //Ejercicio 1.3
    let valorE13 = buscarE13();
    console.log(valorE13);
    //Ejercicio 1.4
    cambiarE14();
    //Ejercicio 1.5
    cambiarE15();
    //Ejercicio 2.1
    crearSelect();
    //Ejercicio 2.2
    crearP();
    //Ejercicio 3.1
    ejercicioE31()
}

function comprobarE11(){
    let valor=document.getElementById('iEj11').getAttribute("width");
    return valor;
}
function comprobarE12(){
    document.getElementById('iEj12').setAttribute("width", 37);
}
function buscarE13(){
    let valor=document.querySelectorAll("input[type='number']")[2].getAttribute("value");
    return valor;
}
function cambiarE14(){
    document.getElementById('div14').setAttribute('class','rojo');
}
function cambiarE15(){
    document.getElementsByClassName('rojo')[1].setAttribute('class','verde');
}
function crearSelect(){
    let div = document.getElementById('div21');
    let select = document.createElement('select');
    div.appendChild(select);
    select.setAttribute('id','select');
    let opcion1=document.createElement('option');
    opcion1.setAttribute('value',1);
    select.appendChild(opcion1);
    opcion1.appendChild(document.createTextNode("1"));
    let opcion2=document.createElement('option');
    opcion2.setAttribute('value',2);
    select.appendChild(opcion2);
    opcion2.appendChild(document.createTextNode("2"));
}
function crearP(){
   let div = document.getElementById('div21');
   let select=document.getElementById('select');
   let p = document.createElement('p');
   div.insertBefore(p,select);
   p.appendChild(document.createTextNode('Brendan Eich creó JavaScript'));
   p.setAttribute('class','bonito');
}
function ejercicioE31(){
    let div = document.getElementById('div31');

    div.addEventListener("click", escribir('CLICK'));
    div.addEventListener("mouseenter", escribir('MOUSEOVER'));
    div.addEventListener("dblclick", escribir('DOUBLECLICK'));
    div.addEventListener("mouseout", escribir('MOUSEOUT'));

}
function escribir(palabra){
    console.log(palabra)
}

////////Ejercicio 4.1/////////DUDA
class Controlador{
    constructor(){
        this.vista= new Vista(this);
        this.modelo= new Modelo(this);
    }
    cambiar(){
       //this.vista.mostrarDatos(this.modelo.getDatos());
    }
}
class Vista{
    constructor(controlador){
        this.controlador = controlador;

        let div = document.getElementById('div41');
        let boton=document.createElement('button');
        div.appendChild(boton);
        let divHijo=document.createElement('div');
        divHijo.setAttribute('id','divHijo');
        div.appendChild(divHijo);
        boton.onclick= this.controlador.cambiar();
    }
    mostrarDatos(texto){
        let div=document.getElementById('divHijo');
        div.appendChild(document.createTextNode(texto));
    }
}
class Modelo{
    constructor(controlador){
        this.controlador = controlador;
        this.datos="MVC es un patrón de diseño";

    }
    getDatos(){
        console.log(this.datos)
        return this.datos;
    }
}

var controlador = new Controlador();