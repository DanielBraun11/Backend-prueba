//VARIABLES
const nombre: string = "Daniel";        //No se puede modificar (const)
let edad: number = 21;      //Se puede modificar(let)
let booleano: boolean = false;

//VARIABLE DESCONOCIDA
//Any - Guarro
let variabeDesconocida1: any;   //No te avisa de que hay un error

//Unkown - Mejor
let variablesDesconocida2: unknown; //Te avisa de que hay error


//VARIABLE ESTRUCTURA "STRUCTS" 
type Persona = {
    nombre: string,
    edad: number,
    altura?: number   //Por si no conoczo el dato o no lo tiene ?
}

const Paco: Persona = { //Tiene y conocemos la altura
    nombre: "Paco",
    edad: 40,
    altura: 167
}

const Manuela: Persona = {  //No sabemos/tiene la altura
    nombre: "Manuela",
    edad: 37
}

type Aula = {
    alumnos: Array<Persona>,
    nombre: string,
    numerito: number
}

type Colegio = {
    nombre: string,
    antiguedad: number,
    aulas: Aula[]
}

//VARIABLE - ARRAY
const misPersonas: Array<Persona> = [];        //Opcion 1
const misAulas: Aula[] =[];             //Opcion 2

//FUNCIONES
let suma  = (a: number, b: number): number => {         
return a + b;   
}   

const resta = (a: number, b: number): number  => {return a - b;}

//----------------------------------------------------

//FUNCION - OPERA ESTRUCTURA "STRUCTS"
type Sumando = {
primero: number,
segundo: number,        
resultado: number  
}

let sumaTipoEstructura = (a: number, b:number) :Sumando => {
return {
primero: a,
segundo: b,
resultado: a + b
}
}

//----------------------------------------------------------------------------------
//EJERCICIO 1 - DEVOLVER LA MARCA DE UN COCHE
type Marca = {
identificador: number,
nombre: string
}

type Coche = {
laMarca: Marca
}

//Creo un coche
let coche1: Coche = {
laMarca: {
identificador: 12345,
nombre: "Toyota"
}
}   

//FUNCION QUE DEVUELVE LA MARCA
const DevolverMarca = (elCoche: Coche): Marca =>{
return elCoche.laMarca;  
}

//MUESTRO EL NOMBRE
console.log(DevolverMarca(coche1).nombre); 

//MUESTRO TODOS LOS DATOS DEL MODELO
console.log(DevolverMarca(coche1)); 

//--------------------------------------------------------------------------------------------------

//ASIGNACIONES
//  console.log(5=="5");        //Tiene conversion de tipos por lo que devuelve true
//  console.log(5==="5");       //No tiene conversion de tipos por lo que devuelve false

//METODOS PARA ARRAYS
const lista: number[] = [1,2,3,4,5];
let listaPalabras: string[] = ["perro","gato","pez"];   //NO const para poder modificar luego
const pares = lista.filter((n) => n%2 == 0);    //NO SE PONE TIPO PORQUE SE TIPA DE LA VARIABLES QUE VIENE en este caso ARRAY

//1. FOR EACH - Ejecuta NO MODIFICA
lista.forEach((n) => {if(n%2 == 0 &&  n%5 == 0){console.log(n)}})   //No retorna nada nada nunca
// ((variable entrada tipada que recibo) => {funcion normal con su retorno si tuviera o muestreo por pantalla})

console.log(lista)  //Devuelve toda la lista sin modificarlas porque FOR EACH no modifica

//2. MAP - Devuelve el mismo tipo con el que trabaja (array en este caso)
// Realmente es como un FOR que recorre una lista(array) ejecutando una funcion pudiendo modificar su contenido
const listaPalabrasMAYUS = listaPalabras.map((palabra) => {return palabra.toUpperCase()})   //Creo una NUEVA lista

console.log(listaPalabras)  //Lista antigua en minuscula
console.log(listaPalabrasMAYUS) //Lista nueva en mayusculas

listaPalabras = listaPalabras.map((palabra) => {return palabra.toUpperCase()})  //MODIFICO la lista inicial a mayusculas (NO const)

console.log(listaPalabras)  //Lista antigua que era minuscula y ahora mayucula

//-----------------------------------------------------------------------------

//EJERCICIO 2 - Crea una funcion que a aprtir de un numero devuelva un tipo Ordinal y lgo usa MAP para recorrer un array de numero y se repita 
const listaNumeros: number[] = [1,2,3,4,5,69];

type Ordinal = {nombre?: string, numero: number}

const passToOrdinal = (n: number) : Ordinal => {
let nombreOrdinal = " ";
if(n==1){return {nombre: "Primero", numero: n}}
if(n==2){return {nombre: "Segudno", numero: n}}
if(n==3){return {nombre: "Tercero", numero: n}}
if(n==4){return {nombre: "Cuarto", numero: n}}
if(n==5){return {nombre: "Quinto", numero: n}}
else{return {numero: n}}
}

//console.log(passToOrdinal(8))

const final = listaNumeros.map((n) => {return passToOrdinal(n)})    //Hay que CREAR una variable que se tipifica sola como array de Ordinal

console.log(final)

//-----------------------------------------------------------------------------
//3. FILTER - Para filtrar datos que cumplen una condicion - devuelve un bool de su condicion. Si se cumple se añade al nuevo array
const numeros: number[] = [10, 15, 20, 25, 30];

// Me quedo solo con los múltiplos de 10
const multiplosDe10 = numeros.filter((n) => n % 10 === 0);  //=== iguala el valor y el tipo variable
console.log(multiplosDe10); // [10, 20, 30]

const multiplode2y3 = numeros.filter((n) => (n % 2 === 0) && (n % 3 === 0) );
console.log(multiplode2y3);


//4. SOME y EVERY - Booleanos 
const edades = [15, 18, 21, 30];

console.log(edades.some((e) => e < 18));  // true (hay menores)
console.log(edades.every((e) => e >= 18)); // false (no todos son mayores)

const numeros2 = [2,4,6,8,10];
const numerosPrimos: number[] = [2,3,5,7,11]; // Added type and value

//5. FIND - encontrar el primer elemento que cumpla la condición
const animales = ["perro", "gato", "pez", "tigre"];
const numero = [1,2,3,4,5,6,7];

// Encuentra el primer animal que tenga 4 letras
const encontrado = animales.find((a) => a.length === 4); // Removed curly braces
console.log(encontrado); // "gato"

const numerosLista10 = numero.find((a) => a%3===0);
console.log(numerosLista10); // 3

//---------------------------------------------------------------------
//ARRAY DE VARIOS TIPOS
let arrayMixto: Array<number|string> | number = [1,"hola",2,"adios",3,"que tal"];

//.toNumber
const recorrerFucnion = arrayMixto.map((x) => x.valueOf()); // Fixed arrow function and added parentheses

function esPrimo(n: number): boolean {
if (n <= 1) return false;
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
}
return true;
}

function hayAlgúnPrimo(arr: number[]): boolean {
return arr.some(esPrimo);
}

// Ejemplo de uso:
const ejemplo = [4, 6, 8, 9, 11];