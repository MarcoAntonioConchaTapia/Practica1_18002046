//desestruturacion de objetos y arreglos

interface Detalles{
  autor:string;
  year:number;
}

interface Reproductor{
  volume:number;
  segundo:number;
  cancion:string;
  detalles:Detalles;
}

const reproductor:Reproductor={
  volume: 90,
  segundo:66,
  cancion:'Mañanitas',
  detalles:{
    autor:'cepillin',
    year:1999,
  }
}

/*
console.log(`El volumen actual es : ${reproductor.volume}`);
console.log(`El segundo actual es : ${reproductor.segundo}`);
console.log(`La canción actual es : ${reproductor.cancion}`);
console.log(`El autor de la canción actual es : ${reproductor.detalles.autor}`);
*/
const{volume, segundo, cancion, detalles}=reproductor;
const{autor}=detalles;

console.log(`El volumen actual es : ${volume}`);
console.log(`El segundo actual es : ${segundo}`);
console.log(`La canción actual es : ${cancion}`);
console.log(`El autor de la canción actual es : ${autor}`);



const dbz:string []=['Goku', 'Vegeta', 'Yamcha', 'Trunks'];

/*

console.log('personaje 1: ', dbz[0]);
console.log('personaje 2: ', dbz[1]);
console.log('personaje 3: ', dbz[2]);
console.log('personaje 4: ', dbz[3]);
*/

const[p1,p2,p3,p4]=dbz;
console.log('personaje 1: ', p1);
console.log('personaje 2: ', p2);
console.log('personaje 3: ', p3);
console.log('personaje 4: ', p4);
