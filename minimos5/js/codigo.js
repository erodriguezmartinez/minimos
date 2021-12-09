'use strict'

//No cambies esta línea o el test no funcionará
window.addEventListener('load', iniciar)

/**
  Función que se llamará al cargar la página.
**/
function iniciar() {
  let formulario=document.forms[0];
  formulario.onsubmit=lista; 

  document.getElementById('iEj1').onblur=registrar;
}
gestionarCookie();
/**
 * Funcion de cookies
 */
function gestionarCookie() {

  let cookie=getCookie("cookie1");
  if(cookie!=""){
    console.log(cookie);
  }else{
    document.cookie = "cookie1=Valor 1";
  }
  
}
/**
 * Fuc¡nción para extraer la cookie indiicada
 * @param {nombre_cookie} cname 
 * @returns 
 */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

/**
 * Funcion de registrar
 */
function registrar(){
  console.log('valor');
}
/**
 * Funcion de ejercicio de lista
 * @param {evento} evento 
 */
function lista(evento){
      //EJER 2.2
      if(document.getElementById('sLista').value==''){
        evento.preventDefault();
      }
}