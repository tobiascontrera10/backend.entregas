JavaScript
................................................Sintaxis y variable
1)///// VARIABLE
una variable es un identificador y va a tener un valor. Es un espacio de valor reservado.
Se ulizan el LET - VAR - CONST
Si yo no declaro una variable me dara undefined.

Tipos de declaraciones:
-De string o cadena ( let dato = "entre comillas")
-Numericos ( let dato = 123 )
-boolean ( true / false)

* CONST: una contante no puede cambiar el valor

2)///// PROMPT - ALERT - CONSOL
Forma de ingresar datos. debe estar igualada a una variable.
Ejemplo:
        let info = prompt("ingrese su nombre")
        alert (info)

El alert responde al prompt con el dato ingresado, similar al console.log

3)///// ParseInt / ParseFloat:
el ParseInt funciona para que una declaracion se tome como numero entero, ejemplo:
   let numero1 = parseInt("ingrese un numero") //2,7
   let numero2 = parseInt("ingrese un numero") //3,5
console.log(numero1+numero2) // el resultado sera 5 porque solo toma los valores enteros

el parseFloat si toma numeros decimales, ejemplo:
   let numero1 = parseFloat("ingrese un numero") //2,7
   let numero2 = parseFloat("ingrese un numero") //3,5
console.log(numero1+numero2) // el resultado sera 6,2 porque si suma los decimales

...................................................Control de flujo
1) /////Condicionales: estructura sintactica que sirve para tomar una decicion a partir de una condicion, se Utiliza el IF y el ELSE
   if(..condicion,ej:true..){
      //bloque a de codigo a codificar
   }else{
      //bloque de codigo a codificar
      }
 
 //Estructura if básica
 CODIGO QUE TIENE PODER DE DECISIÓN
 let preguntaEdad = prompt("Usted es mayor de edad??")
 // Dos iguales "==" compara, un igual "=" asigna
 if (preguntaEdad == "si"){
     //Este bloque de código depende de la evaluación de la condición
     console.log("Usted puede comprar bebidas alcoholicas")
      }else{
         console.log("usted no puede comprar")
      }

Ej de anidacion de if else:
let precio = 100.5;

if (precio < 20) {  //condicion
    alert("El precio es menor que 20");  
}
else if (precio < 50) {  //condicion
    alert("El precio es menor que 50");
}
else if (precio < 100) { //condicion
    alert("El precio es menor que 100");
}
else { //descarte
    alert("El precio es mayor que 100");
}

2) //// Operadores en js:
a.    ==              Es igual (a == b)
b.    ===             Es estrictamente igual (a === b)       // evalua el tipo de dato (booleano,numero, string)
c.    !=              Es distinto (a != b)
d.    !==             Es estrictamente distinto (a != b)
e.    <, <=, >, >=    Menor, menor o igual, mayor, mayor o igual (a <= b)
f.    &&              Operador and (y) (a && b)
g.    ||              Operador or (o) (a || b)
h.    !               Operador not (no) (!a)

Se pueden concatenar y crear varias combinaciones siempre utilixando bien los parentesis 
Ejemplo:

let nombreIngresado   = prompt("Ingresar nombre");
if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
   // si el nombreIngresado es diferente a nada y nombreIngresado es igual a EMA o nombreIngresado es igual a ema
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}

....................................................... Ciclos/iteraciones/bucles
ciclos por conteo: for 
   utilizacion: 
               for(desde; hasta; actualización) {
                        … //lo que se escriba acá se ejecutará mientras dure el ciclo
                        }
    ejemplo (conteo del 0 al 9):
             for (let i = 0; i < 10; i++) {  
                       alert(i);
                       }
    

 
ciclos condicionales: while, do...while
 while permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada

let repetir = true;
while(repetir){
    console.log("Al infinito y...¡Más allá!");
}

....................................................... Funciones
una función es un conjunto de instrucciones que se agrupan para realizar una tarea concreta
sintaxis general:
function saludar() {
    console.log("¡Hola estudiantes!");
}
saludar() //invocamos la funcion

PARÁMETROS:
Cuando enviamos a la función uno o más valores para ser empleados en sus operaciones, estamos hablando de los parámetros de la función.

ej:
//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); 

return hace que tenga visibilidad y alcanze por fuera

FUNCIONES FLECHA
Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada
ej:
const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )

....................................................... objetos
un objeto es una colección de datos relacionados como una entidad.
sintaxis:
const persona1 = { 
     nombre: "Homero", 
     edad: 39, 
     calle: "Av. Siempreviva 742" 
}
/// funcion constructora
el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario
sintaxis:

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad 	 = edad;
    this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

//// metodos
es algo que nosotros declaramos dentro de la funcion contructora y que solo va a aplicar para objetos dentro de la misma


....................................................... Clases
Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos. 
sintaxis:
class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){  //// METODOOO
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar()

....................................................... Arrays
Un Array es un tipo de dato que sirve para almacenar valores en forma de lista. 
tipos de arrays:
const arrayA = [];     // Declaraciòn de array vacío
const arrayB = [1,2];  // Declaracion de array con nùmeros
const arrayC = ["C1","C2","C3"];   // Declaracion de array con strings
const arrayD = [true,false,true,false];   // Declaracion de array con booleanos
const arrayE = [1,false,"C4"];   // Declaracion de array mixto


////método push
Para sumar un elemento a un Array ya existente se utiliza el método push
ej:
const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento')

console.log(miArray.length) // ⇒ 4
console.log(miArray)
//["marca", 3, "palabra", “otro elemento”]

/////unshift
El método push () agrega elementos al final del array. Si queremos agregar al inicio del array, utilizamos el método unshift() de forma similar

////shift y pop
Si queremos eliminar el primer elemento del array utilizamos el método shift(); y si queremos eliminar el último elemento, el método pop().
ej:
const nombres = ["Luis", "Ana", "Julia", “Juan”]

nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]

nombres.shift()
console.log(nombres) // ["Ana", "Julia"]

//////SPLICE
l método splice() permite eliminar uno o varios elementos de un array en cualquier posición. Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición.
ej:
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2)

console.log(nombres)
// ['Rita', 'Ana', 'Vanesa']

....................................................... funcion orden superior 
Es aquella que bien retorna una función, o recibe una función por parámetro. 

parametros y metodos:
//// forEach() : Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro
 sintaxis:
 const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach( (num)=> {
    console.log(num)
} )

////find() 
El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada.
sintaxis:
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

//filter()
El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. 
sintaxis:
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2) // []

 //////some() 
 En vez de retornar el elemento encontrado, some() retorna true o false según el resultado de la iteración de búsqueda.
 sintaxis:
 console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false

///// map()
El método map() crea un nuevo array con todos los elementos del original 
sintaxis:
const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
/* [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] */

////reduce()
El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno. 
ej:

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

otro ejemplo:
const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]

const total = miCompra.reduce((acc, el) => acc + el.precio, 0) // el cero es el contador inicial
console.log(total) // 66250

////sort() 
l método sort() nos permite reordenar un array según un criterio que definamos. Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.

....................................................... DOM (Document Object Model)

Capturamos y accedemos al html
//getElementById
let (declaracion) = document.getElementById(" id del objeto en el archivo html")
console.log(declaracion )

//getElementsByClassName
let (declaracion) = document.getElementsByClassName(" class del objeto en el archivo html")
console.log(declaracion )

////acceso mediante QuerySelector
let (declaracion) = document.querySelectorAll("#id") /// se utiliza el # o "."

///////como modificar nodos:
innerText :
//CODIGO HTML DE REFERENCIA
<h1 id=”titulo”>Hola Mundo!</h1>
//CODIGO JS
let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = “Hola Coder!”
console.log( titulo.innerText ) // “Hola Coder!”


INNET HTML
innerHTML permite definir el código html interno del elemento seleccionado. El navegador lo interpreta como código HTML y no como contenido de texto, permitiendo desde un string crear una nueva estructura de etiquetas y contenido. 
ej:
//CODIGO HTML DE REFERENCIA
<div id=”contenedor”></div>
//CODIGO JS
let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = “<h2>Hola mundo!</h2><p>Lorem ipsum</p>”

//Resultado en el DOM
<div id=”contenedor”>
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>

////crear nodo
ejemplo:
let nuevoLi = document.createElement ("li")
nuevoLi.innerText = "brazil"

listaPaises.appendChild(nuevoLi)    ///listaPaises esta en el html


/////////////////////////////Eventos
Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.

/////////addEventListener()

<button id="btnPrincipal">CLICK</button>  ////html

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)      
function respuestaClick(){
        console.log("Respuesta evento");
    }


///////// .onclick
<button id="btnPrincipal">CLICK</button> /////html

let boton = document.getElementById("btnPrincipal")
boton.onclick = () =>{console.log("Respuesta 2")}

OJO CON LOS PARENTESIS
ej:

function holaMundo (){
    console.log("hola")
}

let boton document.getElementById ("buttonDelHtml")
boton,onclick = holamundo //// sin parentesis se adjunta  


EVENTOS DEL ON :
mousedown/mouseup: Se oprime/suelta el botón del ratón sobre un elemento.
mouseover/mouseout:  El puntero del mouse se mueve sobre/sale del elemento.
mousemove: El movimiento del mouse sobre el elemento activa el evento.
click: Se activa después de mousedown o mouseup sobre un elemento válido.


EJ con el imput:

//CODIGO HTML DE REFERENCIA
<input id = "nombre" type="text">

//CODIGO JS
let input1  = document.getElementById("nombre")
input1.addEventListener(‘input’, () => {
     console.log(input1.value)   //// con el .value obtenemos la respuesta
})

OTRA FORMA CON EL addEventListener 

const eventoMult = document.getElememtById ("evento-multiple)  //capturo imput de html

eventoMult.addEventListener("click", ..adjunto una funcion )
