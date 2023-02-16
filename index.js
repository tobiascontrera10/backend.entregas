/*
//EJERCICIO 
//Calcule el promedio de Gol de un jugador/a a partir del ingreso de la cantidad de goles y cantidad de partidos
//let nombreJugador = prompt("Ingrese el nombre del jugador/a");
//let cantGoles = parseInt(prompt("Ingrese la cantidad de goles realizados"));
//let cantPartidos = parseInt(prompt("Ingrese cantidad de partidos jugados"));
//let promedio = cantGoles/cantPartidos; //divide los valores
//alert(`El promedio de gol de ${nombreJugador} es ${promedio.toFixed(2)}`)// el .toFixed es para controlar la cantidad de decimales


//Variable booleana ejemplo
let numero = 10
let mayor5 = (numero > 5) //declara una variable como condicion
if(mayor5){   //luego la impone
    console.log("El número es mayor a 5")
}else{
    console.log("El número no es mayor a 5")
}

//ejemplo de || :
// //Lo hacemos con una condición compuesta mediante el operador ||
//OR con que una de las condiciones sea true, el global va a ser True
if ((color.toUpperCase() == 'ROJO') || (color.toLowerCase() == 'azul') || (color.toLowerCase() == 'amarillo')) { //.toUpperCase() hace que todo el valor sea en minuscula
    // si el color es igual a rojo o es igual a azul o es igual a amirillo
    console.log("Este es un color primario")
}else{
    console.log("Este no es un color primario")
}

// ejercicio de clase 2 (CONTROL DE FLUJOS)

//let numeroIngr = prompt("ingrese un numero");
if (numeroIngr > 1000){
    alert("El numero es mayor a 1000");
}
else{
    alert("no lo conseguiste");
};

let nota1 = parseInt(prompt("ingrese una nota"));
let nota2 = parseInt(prompt("ingrese una nota"));
let nota3 = parseInt(prompt("ingrese una nota"));

let resultado = (nota1 + nota2 + nota3);
console.log(`el resultado es ${resultado}`);
let promedio = resultado*3;
console.log(`el promedio es ${promedio}`)


///ejemplo de for
acum = 0;
for (i =0 ; i<3 ; i++){
    nota = parseInt(prompt("añade una nota"));
    acum = acum + nota ;
    console.log(acum);
}

//// ejemmplo el while 
let numero = true
do{
    let clave = prompt("ingrese clave")
    if(clave == 1234){ 
        alert("la clave es correcta ")
        numero = false      
    }else{
        alert("clave incorrecta")
    }
}while(numero)


let acumulador = 0
let bandera = true
while(bandera){
    let ingreso = parseInt(prompt("ingrese numero"))
    acumulador= acumulador + ingreso
    console.log(acumulador)
    if(acumulador >= 100){
        bandera= false
    }

}

// ejemplo de return, el jemplo de arriba esta mal 
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
console.log(resultado)


const personas = {
    nombre: "Matias",
    apellido: "Colder",
    edad: 21
}
console.log(personas)
console.log(personas.apellido)

// ejemplo function constructora con metodo
function Tecnologia (objeto, marca, precio){
    this.objeto = objeto,
    this.marca = marca,
    this.precio = precio,
    this.ayuda = function(){
        if(this.marca == "samsung"){
            console.log("este producto es creado en Tierra del fuego")
        }else{
            console.log("este producto no es argentino")
        }
    }
//    this.parrafo = function(){console.log( `el objeto es ${this.objeto} y su precio es ${this.precio}`)} //metodo con una funcion anonima

}

const producto1 = new Tecnologia ("celular", "samsung", 210000);
const producto2 = new Tecnologia ("celular", "aple", 210000);
const producto3 = new Tecnologia ("celular", "samsung", 210000);
const producto4 = new Tecnologia ("celular", "motorola", 210000);


producto1.ayuda();
producto2.ayuda();
producto3.ayuda();
producto4.ayuda();


const lista = ["mono", "pato", "toro", "leon", "zebra", "mamut"]

for(i=0; i< lista.length; i++){ //el length cuanta los objetos
    console.log(lista[i])
}

let total = 0
for (let i = 1; i <= 10; i++) {
    total += i
}

console.log(total)  //  55
*/  

const  nombres = ["toot", "baat", "jeet", "rook", "truuk"]

for (i of nombres){
    console.log(i)
}

