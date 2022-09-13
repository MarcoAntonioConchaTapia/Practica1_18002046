
console.log("Hola mundo");


var t1: number | string = 3;
let t2: number | string=2;
let activo:boolean=false;
const t3=666;

t1 = 'www';
t2 = 'www';

console.log(t1);

console.log(t2);

let nombres:string[]=['mario','dario','juan']

console.log(nombres);

let datos:(boolean|number|string)[]= ['mario',23, true, 'lopez']

console.log(datos);

datos.push(200);
datos.push('Mario');
datos.push(false);
console.log(datos);

let arreglo: Array<number>=[1,2,3,4]

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string,
    materias?:string[]
}
const alumno:Alumno={
    matricula:'mario',
    nombre:'lopez',
    edad:23,
    email:'gmail.com',
   materias:['inglés','español']
}
alumno.nombre='Felipe';

console.log(alumno)




