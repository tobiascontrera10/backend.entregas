class Empleados {
    constructor( nombre, apellido, legajo, area, nacionalidad ){
        this.nombre = nombre,
        this.apellido = apellido,
        this.legajo = legajo,
        this.area = area,
        this.nacionalidad = nacionalidad
    }
    resumen(){
        console.log(`El empleado ${this.apellido} de legajo ${this.legajo} esta registrado`);
    };
};

const persona1 = new Empleados ("juan", "bustamante", 25390, "produccion", "argentina" );
const persona2 = new Empleados ("jose", "pereyra", 25391, "produccion", "argentina" );
const persona3 = new Empleados ("tomas", "atis", 25392, "limpieza", "colombia" );
const persona4 = new Empleados ("ofelia", "duarte", 25394, "administracion", "argentina" );
const persona5 = new Empleados ("fabrizio", "bustamante", 25395, "produccion", "argentina" );
const persona6 = new Empleados ("omar", "duco", 25396, "produccion", "venezuela" );
const persona7 = new Empleados ("fernando", "gonzales", 253907 ,"mantenimiento", "argentina" );
const persona8 = new Empleados ("raul", "mayada", 25398, "produccion", "chile" );


const lista = [persona1,persona2,persona3,persona4,persona5,persona6,persona7,persona8];

console.log(lista);

persona1.resumen();
persona2.resumen();
persona3.resumen();
persona4.resumen();
persona5.resumen();
persona6.resumen();
persona7.resumen();
persona8.resumen();

/*function agregarPersonal (){
    let agrNombre = prompt("nombre")
    let agrApellido = prompt("apellido")
    let agrLegajo = parseInt(prompt("legajo"))
    let agrArea = prompt("area")
    let agrNacionalidad = prompt("nacionalidad")

    let personaAgr = new Empleados (length++, agrNombre, agrApellido, agrLegajo, agrArea, agrNacionalidad);
    lista.push(personaAgr);
    console.log(lista);
}
agregarPersonal()
console.log(lista);
*/
// forEach()
let busqueda = lista.forEach((datos)=>console.log(datos.area) ); // saca del array el elemento area 
console.log(busqueda);
// find() 
let busqueda1 = lista.find((busq) => busq.nacionalidad == "chile") ; // compara y busca el elemento 
console.log(busqueda1);
//filter()
let busqueda2 = lista.filter((filtro)=> filtro.area =="produccion" )// filtra todos los elementos que se pidan
console.log(busqueda2)
