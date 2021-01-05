
/* validacion formulario  inicio sesion*/
function validar() {
 var correo, contrasena, expresion;
 correo = document.getElementById("correo").value;
 contrasena = document.getElementById("contrasena").value;

 if (correo === "") {
  alert("el campo  correo esta vacio");

 } else if (!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(correo))) {
  alert("verifique  que el correo este correcto");
  return false;
 } else if (contrasena === "") {
  alert("el campo contraseña esta vacio");
  return false;
 } else if (contrasena.length < 5) {
  alert("la contraseña es demasiado corta")
  return false;
 }
 
 else if(!check.checked){
  alert("debes aceptar terminos y condiciones");
  return false;
 }

}


/* validacion formulario contacto*/


function validacionformulario() {
 var nombre_form, correo_form, telefono_form, mensaje_form;

 nombre_form = document.getElementById("nombre_form").value;
 correo_form = document.getElementById("correo_form").value;
 telefono_form = document.getElementById("telefono_form").value;
 mensaje_form = document.getElementById("mensaje_form").value;

 if (nombre_form =="" || nombre_form==0 || /^\s+$/.test(nombre_form)) {
  alert("el campo nombre  esta vacio");
  return false;
 } 
 
 if (correo_form==""  || correo_form==0 || /^\s+$/.test(correo_form)){
  alert("el campo correo se encuenta vacio");
  return false;
 }
 
 if (!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(correo_form))) {
  alert("verifique  que el correo este correcto");
  
  return false;
 }
 
 if (telefono_form==""  || telefono_form_form==0 || /^\s+$/.test(telefono_form)){
  alert("el campo telefono se encuenta vacio");
  return false;
 }
 
 else if (!(/^\d{9}$/.test(telefono_form))){
  alert ("Debe cumplir el formato");
  return false;
 }
 
 
 
 else if (isNaN(telefono_form)){
  alert("el campo telefono solo se permite ingresar numeros"); 
  return false;
 }
 
 if (mensaje_form==""){
  alert("el campo mensaje se encuenta vacio");
  return false;
 }
 
}





