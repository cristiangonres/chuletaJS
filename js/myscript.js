let animales = ["caballo", "rana"];
let animales2 = ["serpiente", "cocodrilo", animales, "lagarto"];


//for in devuelve posición, for of devuelve valor
forLabel:
for (let animal in animales2) {
    if (animal == 2) {
        for (let animal of animales) {
            document.write(animal + "<br>");
            continue forLabel;
        }
    } else {
        document.write(animal + "<br>");
    }

}


// funciones
function pregunta() {

    let respuesta = prompt("ey cristian");
    if (respuesta == "ey") {

        alert(":-)");

    } else {

        alert("marica");

    }

    return "la función se ejecutó OK <br>"
}

let saludo = pregunta();
document.write(saludo);

//funciones con parametros

function suma(num1, num2) {
    let suma = num1 + num2;
    return suma;
}

document.write(suma(11, 33));


function saludar(nombre) {
    let frase = `hola ${nombre}, ¿cómo estás?`;
    document.write(frase);
}

saludar("Cristian");

const funcionFlecha = (name) => {
    let ora = `hola ${name}, mierda`;
    document.write(ora);
}
funcionFlecha("pp");

const saaa = function (name2) {
    let ora = `hola ${name2}, mierda <br>`;
    document.write(ora);
}
saaa("const");



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
class Animal {
    constructor(especie, edad, color) {
        this.esp = especie;
        this.color = color;
        this.age = edad;
        this.info = `Tengo un ${this.esp} de color ${this.color} que tiene ${this.age} años`;
    }
    verInfo() {
        document.write(this.info + "<br>");
    }
}


class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }
    static ladrar(){
        alert("GUAU");
    }
    ruido (){
        alert("grrr");
    }

    set modificarRaza(newRaza){
        this.raza = newRaza;
    }
    get getRaza(){
        return this.raza;
    }
}

const perrito = new Perro("perro", 15, "gris", "chiguagua");
const gato = new Animal("gato", 1, "negro");
const tiburon = new Animal("tiburonconst", 1, "negro");

Perro.ladrar();
document.write(perrito.info + "<br>");
perrito.verInfo();
gato.verInfo();
perrito.ruido();
perrito.modificarRaza = "Doverman";
document.write(perrito.getRaza);

class mobiles {
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    reiniciar () {
        if (this.encendido) {
            this.encendido = false;
            alert('apagado');
            this.encendido = true;
            alert('encendido');
        }
    }
    powerBoton() {
        if (this.encendido){
            alert('apagando' + this.encendido);
            this.encendido = false;
        } else {
            this.encendido = true;
            alert('encendido' + this.encendido);
        }
    }
    
}