export default class Calculator {

  constructor(...valores) {
    this.valores = valores;
  }

  getNumbers(valor)  {
    this.valores.push(valor);
    console.log(this.valores);
  }
}
