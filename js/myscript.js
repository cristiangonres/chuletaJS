// let animales = ["caballo", "rana"];
// let animales2 = ["serpiente", "cocodrilo", animales, "lagarto"];


// //for in devuelve posición, for of devuelve valor
// forLabel:
// for (let animal in animales2) {
//     if (animal == 2) {
//         for (let animal of animales) {
//             document.write(animal + "<br>");
//             continue forLabel;
//         }
//     } else {
//         document.write(animal + "<br>");
//     }

// }


// // funciones
// function pregunta() {

//     let respuesta = prompt("ey cristian");
//     if (respuesta == "ey") {

//         alert(":-)");

//     } else {

//         alert("marica");

//     }

//     return "la función se ejecutó OK <br>"
// }

// let saludo = pregunta();
// document.write(saludo);

//funciones con parametros

// function suma(num1, num2) {
//     let suma = num1 + num2;
//     return suma;
// }

// document.write(suma(11, 33));


// function saludar(nombre) {
//     let frase = `hola ${nombre}, ¿cómo estás?`;
//     document.write(frase);
// }

// saludar("Cristian");

// const funcionFlecha = (name) => {
//     let ora = `hola ${name}, mierda`;
//     document.write(ora);
// }
// funcionFlecha("pp");

// const saaa = function (name2) {
//     let ora = `hola ${name2}, mierda <br>`;
//     document.write(ora);
// }
// saaa("const");



// COMENTAR:  CTRL + }
// GUARDAR: CTRL + S
// INSERTAR VARIOS CURSORES: ALT + (PULSAR LÍNEAS)
// DESHACER: CTRL + Z
// JUSTIFICAR: CTRL + ALT + L
//PALETA COMANDOS: CTRL + SHIFT + P
//DESPLAZAR LÍNEA: ALT+SHIFT+FLECHA ARRIBA O ABAJO
//EXPLORADOR ARCHIVOS: CTRL + P



// document.write("PROBLEMA FIESTA");
// let free = false;
// const validarCliente = (time) => {
//     let edad = prompt("¿Cuál es tu puta edad?");
//     if (edad >= 18) {
//         if (time >= 2 && time < 7 && !free) {
//             alert("PASAS GRATIS");
//             free = true;
//         } else {
//             alert(`TE TOCA PAGAR, SON LAS ${time}`);
//         }
//     } else {
//         alert("Un puto menorrr");
//     }
// }
// validarCliente(1);


// document.write("<br><br><br>");
// document.write("ALUMNOS");
// let cantidad = prompt("¿Cuántos alumnos hay?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
// }

// const apunteAsistencia = (nombre, p) => {
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[p][1]++;

//     }
// }


// for (i = 0; i < 5; i++) {
//     for (alumno in alumnosTotales) {
//         apunteAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     _______Presentes: ${alumnosTotales[alumno][1]}<br>
//     _______Ausencias: ${30 - alumnosTotales[alumno][1]}
//     `;
//     if (5 - alumnosTotales[alumno][1] > 2) {
//         resultado += "<b style='color:red'> SUSPENDIDO POR INASISTENCIA</b><br>";
//     } else {
//         resultado += "<b style='color:blue'>aprobaddoooo</b>"
//     }
//     document.write(resultado)
// }


// EJERCICIO CALCULADORA
// document.write("<br><br><br>");

// const sumar = (num1, num2)=>{
//     return parseInt(num1) + parseInt(num2)
// }
// const restar = (num1, num2)=>{
//     return parseInt(num1) - parseInt(num2)
// }
// const dividir = (num1, num2)=>{
//     return parseInt(num1) / parseInt(num2)
// }
// const multiplicar = (num1, num2)=>{
//     return parseInt(num1) * parseInt(num2)
// }

// alert("Seleccione operación");
// let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación");
// let nume1 = prompt("Escriba primer número");
// let nume2 = prompt("Escriba el segundo número");
// if (operacion == 1) {
//     resultado = sumar(nume1, nume2);
//     alert(`El resultado es : ${resultado}` );
// } else if (operacion == 2 ) {
//     resultado = restar(nume1, nume2);
// } else if (operacion == 3 ) {
//     resultado = dividir(nume1, nume2);
// } else if (operacion == 4 ) {
//     resultado = multiplicar(nume1, nume2);
// }

// document.write(`El resultado es : ${resultado}` );



// EJERCICIO CLASES
// class Animal {
//     constructor(especie, edad, color) {
//         this.esp = especie;
//         this.color = color;
//         this.age = edad;
//         this.info = `Tengo un ${this.esp} de color ${this.color} que tiene ${this.age} años`;
//     }
//     verInfo() {
//         document.write(this.info + "<br>");
//     }
// }


// class Perro extends Animal {
//     constructor(especie, edad, color, raza) {
//         super(especie, edad, color);
//         this.raza = raza;
//     }
//     static ladrar(){
//         alert("GUAU");
//     }
//     ruido (){
//         alert("grrr");
//     }

//     set modificarRaza(newRaza){
//         this.raza = newRaza;
//     }
//     get getRaza(){
//         return this.raza;
//     }
// }

// const perrito = new Perro("perro", 15, "gris", "chiguagua");
// const gato = new Animal("gato", 1, "negro");
// const tiburon = new Animal("tiburonconst", 1, "negro");

// Perro.ladrar();
// document.write(perrito.info + "<br>");
// perrito.verInfo();
// gato.verInfo();
// perrito.ruido();
// perrito.modificarRaza = "Doverman";
// document.write(perrito.getRaza);

// class mobiles {
//     constructor(color, peso, rdp, rdc, ram){
//         this.color = color;
//         this.peso = peso;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.ram = ram;
//         this.encendido = false;
//     }

//     reiniciar () {
//         if (this.encendido) {
//             this.encendido = false;
//             alert('apagado');
//             this.encendido = true;
//             alert('encendido');
//         }
//     }
//     powerBoton() {
//         if (this.encendido){
//             alert('apagando' + this.encendido);
//             this.encendido = false;
//         } else {
//             this.encendido = true;
//             alert('encendido' + this.encendido);
//         }
//     }

// }

// let cadena = "eres un pedazo de hijo de ";

// resultado = cadena.concat("puta");
// resultado = cadena.startsWith("eres ");
// resultado = cadena.endsWith("eres ");
// resultado = cadena.includes("psdazo ");
// resultado = cadena.indexOf("pedazo ");
// resultado = cadena.lastIndexOf("pedazo ");
// resultado = cadena.repeat(10);
// document.write(resultado);
// document.write(cadena[12]+cadena[13]+cadena[15]+cadena[17]+cadena[18]);
// resultado = cadena.padEnd(61,"1");
// document.write(resultado);
// resultado = cadena.padStart(61,"<br>1<br>");
// document.write(resultado);
// cadena = "  eres un PEDAZO de hijo de puta   ";
// resultado = cadena.split(" ");
// resultado = cadena.substring(9,16);
// resultado = cadena.toLowerCase();
// resultado = cadena.toUpperCase();
// let numero = 1234;
// resultado = numero.toString();
// resultado = cadena.trimStart();
// resultado = cadena.trimEnd();
// document.write(resultado +"<br>");
// document.write(resultado.length);


// let nombres=["pedro", "mario", "fernando"];
// document.write(nombres+ "<br>");
// let resultado = nombres.pop();
// document.write("elemento eliminado: " + resultado + "<br>");
// document.write(nombres);


// let nombres2=["pedro", "mario", "fernando"];
// document.write(nombres2+ "<br>");
// let resultado2 = nombres2.shift();
// document.write("elemento eliminado: " + resultado2 + "<br>");
// document.write(nombres2);


// let resultado2 = nombres2.push("caca");
// document.write(  nombres2 + "<br>");
// document.write(  nombres2.reverse() + "<br>");

// let numeros = [1,4,7,9,6,2,54,7,8,4,567,345,2,5,6];
// document.write(numeros.sort());
// nombres2.splice(0,4, "satan","juliooo");
// document.write(  nombres2 + "<br>");
// let union = numeros.join(" - ");
// document.write(union);
// let newArray = numeros.slice(1,5);
// document.write(newArray +"<br>");
// let resultado = numeros.indexOf(567);
// document.write(resultado +"<br>");
// resultado = numeros.includes(567);
// document.write(resultado +"<br>");
// numeros.forEach(function(numero){ document.write(numero + " ")});
// let resultados = nombres2.filter(numero => numero.length > 5);

// document.write(resultados +"<br>");

// let numero = Math.sqrt(64);
// numero = Math.cbrt(28);
// numero = Math.max(28,  4, 45, 6,6, 7, 975, 354365);
// numero = Math.min(28,  4, 45, 6,6, 7, 975, 354365);
// for (var i = 0; i<10000; i++) {
// numero = Math.random()*99;
// //numero = Math.round(numero);
// numero = Math.floor(numero+1);

// document.write(numero + "<br>");
// }

// document.write(Math.fround(9.6554872) + "<br>");
// document.write(Math.trunc(Math.PI));
// document.write(Math.trunc(Math.PI));


// class Calculadora {
//     constructor(){
//     }

//     sumar(num1, num2){
//         return parseInt(num1) + parseInt(num2);
//     }
//     restar(num1, num2) {
//         return parseInt(num1) - parseInt(num2);
//     }
//     multiplicar(num1, num2) {
//         return parseInt(num1) * parseInt(num2);
//     }
//     dividir(num1, num2) {
//         return parseInt(num1) / parseInt(num2);
//     }

//     potencia(num1, exp) { 
//         let numero = num1;
//         for (var i = 1; i < exp; i++) { 
//             numero *= num1;
//         }
//         return numero;

//     }
// }

// const calculadora = new Calculadora();
// alert("Qué operación deseas realizar");
// let operacion = prompt("1 - suma, 2 - resta, 3 - multiplicación, 4 - división, 5 - pontencia");

// if (operacion == 1) {
//     let numero1 = prompt("primer número");
//     let numero2 = prompt("segundo número");
//     resultado = calculadora.sumar(numero1, numero2);
//     document.write(resultado);
//     alert(`resultado: ${resultado}`);
// }
// if (operacion == 2) {
//     let numero1 = prompt("primer número");
//     let numero2 = prompt("segundo número");
//     resultado = calculadora.restar(numero1, numero2);
//     alert(`resultado: ${resultado}`);
// }
// if (operacion == 3) {
//     let numero1 = prompt("primer número");
//     let numero2 = prompt("segundo número");
//     resultado = calculadora.multiplicar(numero1, numero2);
//     alert(`resultado: ${resultado}`);
// }
// if (operacion == 4) {
//     let numero1 = prompt("primer número");
//     let numero2 = prompt("segundo número");
//     resultado = calculadora.dividir(numero1, numero2);
//     alert(`resultado: ${resultado}`);
// }
// if (operacion == 5) {
//     let numero1 = prompt("Base");
//     let numero2 = prompt("Exponente");
//     resultado = calculadora.potencia(numero1, numero2);
//     alert(`resultado: ${resultado}`);
// }

// const obtenerInformacion = (materia) => {
//     materias = {
//         fisica: ["Lucas", "pedro", "lucas", "juan", "maria", "laura", "manuel"],
//         quimica: ["Sandro", "lucas", "juan", "maria", "laura", "manuel"],
//         lengua: ["Manola", "lucas", "juan", "maria", "laura", "manuel"],
//         ingles: ["Perico", "lucas", "juan", "maria", "laura", "manuel"]
//     }
//     if (materias[materia] !== undefined) {
//         return [materias[materia], materia, materias];
//     } else {
//         return materias;
//     }
// }
// const mostrarInformacion = (materia) => {
//     let informacion = obtenerInformacion(materia);
//     if (informacion !== false) {
//         let profesor = informacion[0][0];
//         let alumnos = informacion[0];
//         alumnos.shift();
//         document.write(`Alumnos presentes en <b>${informacion[1].toUpperCase()}: </b><b style="color:blue" > ${alumnos}</b> <br> Profesor DON ${profesor}<br><br>`);
//     }
// }


// const (materia) => {
//     materias = {
//         fisica: ["Lucas", "pedro", "lucas", "juan", "maria", "laura", "manuel"],
//         quimica: ["Sandro", "lucas", "juan", "maria", "laura", "manuel"],
//         lengua: ["Manola", "lucas", "juan", "maria", "laura", "manuel"],
//         ingles: ["Perico", "lucas", "juan", "maria", "laura", "manuel"]
//     }

// const cantidadDeClases = (alumno) => {
//     let informacion = obtenerInformacion();
//     let cantidadTotal = 0;
//     alert(`${alumno}`)
//     for (info in informacion) {
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++;
//             alert(`${cantidadTotal}`)
//         }
//     }
//     return `${alumno} va a ${cantidadTotal} clases`;
// }

// mostrarInformacion("fisica");
// mostrarInformacion("quimica");
// mostrarInformacion("lengua");
// mostrarInformacion("ingles");
// document.write(cantidadDeClases("laura"));

// const inscribir = (alumno,materia)=>{
//     personas = materias[materia];
//     personas.shift();
//     alumnos = personas;
//     if (alumno.length >= 2){
//         document.write(`lo siento <b style='color:green'>${alumno}</b> el pescao ya está vendido en ${materia}`)
//     }
// }

// inscribir("pollas","fisica");

///CONSOLE
//----funciones de registro
// console.assert(5>6);  //mensaje de error si la salida es falsa, no aparece nada si es true
// console.clear(); //limpia consola
// console.error('esto es un error');
// console.info('esto es un aviso!!');
// console.log('esto es un mensaje de depuración');
// console.table([[5435,23432,423465,547,56],3,5,6,8,6,5,4,3,6]); //tiene argumento obligatorio array u objeto, y parámetro adicional columns y muestra tabla en consola
// console.warn('estooo');
// console .dir([[5435,23432],[547,56],[423465,547],[4233,877]]) //lista iteractiva de las propiedades del objeto
// console.clear(); 
// //---- funciones de conteo
// for (var i = 0; i<100; i++){
//     console.count() //registra nº de veces que se llama a count
// }

// console.countReset() //resetea contador

// //---AGRUPACIÓN
// console.group("nombre grupo");  //agrupa entradas de consola
// console.groupCollapsed(); //agrupa entradas de consola, se muestra cerrado
// console.groupEnd();
// console.groupEnd();

// console.time();
// console.timeLog();
// console.timeEnd();


// console.log("%cPollaas en vinagre", "color:red;padding:20px 100px;border: 3px solid blue")

//DOCUMENT - METODOS DE SELECCIÓN DE ELEMENTOS
// parrafoTag = document.getElementsByTagName("a");
// parrafoId = document.getElementById("aa");
// document.write(parrafoTag[0]);
// document.write(parrafoId);
// parrafoQuery = document.querySelector(".prueba"); //selector (querySelectorAll para elegir todos los elementos)
// //document.write(parrafoQuery);
// const cristian = document.querySelector(".input");
// cristian.setAttribute("type", "color"); //modifica o establece un atributo, primer parámetro el nombre, segundo parámetro el valor
// document.write("</br>" + cristian.getAttribute("type") + "</br>"); //obtiene valor de un atributo
// cristian.removeAttribute("type"); //elimina nombre y valor de atributo
// document.write(cristian.getAttribute("type") + "</br>");
// cristian.setAttribute("type", "");
// document.write(cristian.getAttribute("type"));
// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contentEditable", "true");
// titulo.setAttribute("dir", "rtl");
// //titulo.setAttribute("hidden", "false");
// titulo.setAttribute("tabindex", "2");
// const contenido = document.querySelector("#cristian");
// contenido.setAttribute("tabindex", "0");
// contenido.setAttribute("title", "Gilipollas");
// const input = document.querySelector(".inputverga");
// document.write(input.value)
// input.type = "file";

// input.accept = "image/png"; //para input type="file" delimita los ficheros que acepta


// const inputText = document.querySelector("#min");
// inputText.minLength = 4;
// inputText.setAttribute("placeholder", "esto");
// inputText.required = "true";
// const titulo = document.querySelector("#titulo");
// titulo.style.color = "blue";
// titulo.style.backgroundColor = "red";
// titulo.classList.add("mierda"); //añade clase
// titulo.classList.add("puerco");
// titulo.classList.add("cerdo");
// titulo.classList.remove("mierda"); //elimina una clase
// let valor = titulo.classList.item(1); //selecciona una clase
// document.write(valor)
// titulo.classList.contains("cerdo"); //devolvería TRUE, comprueba si tiene una clase
// titulo.classList.toggle("buka");  //si no tiene la clase, la agrega, si la tiene, la borra
// titulo.classList.replace("cerdo", "perrro");
// let resultado = titulo.textContent; //devuelve el texto de cualquier nodo
// resultado = titulo.innerHTML; //devuelve el código de cualquier nodo
// resultado = titulo.outerHTML; //devuelve el código de cualquier nodo
// alert(resultado)
// document.write(resultado);
// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement("LI"); //crea etiqueta

// const textDelItem = document.createTextNode("1 listaaaa1"); //crea texto para el nodo

// item.appendChild(textDelItem); //introduce texto en nodo
// item.innerHTML ="2 otrooo"; //no es un objeto
// contenedor.appendChild(item)


const contenedor = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();

// for (i = 0; i < 20; i++) {
// const item = document.createElement("LI");
// item.innerHTML = "ERES EL MEJOR";
// fragmento.appendChild(item);
// }
// contenedor.appendChild(fragmento);
// const primerHijo = contenedor.firstChild;
// const primerElementHijo = contenedor.firstElementChild;
// const ultimoHijo = contenedor.lastChild;
// const ultimoElementHijo = contenedor.lastElementChild;
//const hijos = contenedor.childNodes;
//hijos.forEach(hijo => console.log(hijo));
// const hijos = contenedor.children;
// for (hijo in hijos){
//     console.log(hijo)
// }

const parrafo = document.createElement("P").innerHTML="Párrado";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "mIERDA";
h2_antiguo = document.querySelector(".h2");
let respuesta = h2_antiguo.hasChildNodes();
if (respuesta) {
    document.write("TIENE HIJOS")
} else {
    document.write("NO TIENE HIJOS")
}

//contenedor.replaceChild(h2_nuevo , h2_antiguo);
//contenedor.removeChild(h2_antiguo);
console.log(h2_antiguo.parentElement);
console.log(h2_antiguo.nextSibling);
console.log(h2_antiguo.previousSibling);
console.log(h2_antiguo.previousElementSibling);
console.log(h2_antiguo.nextElementSibling);

console.log(Element.closest(".contenedor")); //devuelve el ascendiente más cercano al elemento actual (o el propio elemento actual) que coincida con el selector proporcionado por parámetro

