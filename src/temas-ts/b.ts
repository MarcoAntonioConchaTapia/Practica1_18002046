
export
class Multiplicar {
private valor1: number;
private valor2: number;
private resultado: number;


public setValor1(a: number) {
    this.valor1 = 0;
    this.valor1 = a;
}

public setValor2(b: number) {
    this.valor2 = 0;
    this.valor2 = b;
}

public Proceso() {
  this.operacion();
}

public imprimir() {
  console.log('El resultado de la multiplicación de ' +this.valor1+ ' y '+this.valor2 +' es '+ this.resultado);
}

private operacion() {
  this.resultado = 0;

  for (let i = 0; i < this.valor2; i++) {

    this.resultado += this.valor1;
    console.log('La multiplicacion en suma es : ' + (this.resultado - this.valor1) + ' = ' + (this.resultado));
  }
}
}

