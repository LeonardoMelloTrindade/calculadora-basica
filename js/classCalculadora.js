export default class Calculadora  {

    constructor(valor1, valor2) {
       this.valor1 = valor1;
       this.valor2 = valor2;
    }

    calcular(operador) {
       const resultado = eval(`${this.valor1} ${operador} ${this.valor2}`);
       return resultado;
    }
}