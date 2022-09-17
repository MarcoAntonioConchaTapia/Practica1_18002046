//manejo de funciones 

function sumar(a:number,b:number,c:number=0):void{
  
  //  return a+b+c;

  //  if(c){
      //  return a+b+c;
    //}
    //else{
     //   return a+b
    //}
    
    
    //return a+b+c;
    console.log(a+b+c)
}


console.log(sumar(2,3))
console.log(sumar(2,2,2))

function multiplicar(numero:number, otronumero:number, base:number):number{
  return numero*base;
}

const resultado= multiplicar(5,10,4);
console.log(resultado);

interface Alumno2
{
  nombre:string;
  edad:number;
  muestraEdad:()=>void;
}

function cursar(alumno:Alumno, nuevaEdad:number):void{
  alumno.edad+=nuevaEdad;
  console.log(alumno);
}

const nuevoAlumno:Alumno2={
  nombre:'Mario',
  edad: 23,
  muestraEdad(){
    console.log('Edad de alumno :' , this.edad);
  }
}

console.log(nuevoAlumno, 28);