import {calcularIva2, Producto} from "./Desesturcturacion_funciones";

const TiendaProductos:Producto[]=[
 {
  desc:'Telefono1',
  precio: 1234
 },
 {
  desc:'Tablet1',
  precio: 4567
 },
 {
  desc:'Telefono2',
  precio: 8910
 },
];

const [total1,iva1]=calcularIva2(TiendaProductos);
console.log(`Total: ${total1} \n IVA ${iva1} `)