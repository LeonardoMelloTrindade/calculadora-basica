// import Calculadora from "./classCalculadora.js";
import GetsElements from "./getElements.js";
import ServiceBtn from "./changeColorBtn.js";
import Calculator from "./classCalculadora.js";

const getElements = new GetsElements();

// PARTE DE PERSONALIZAÇÃO DE CORES DOS BOTOES
const serviceBtn = new ServiceBtn();
let colorsOn = false;
const btn = getElements.btnOnOff;

const onOffColors = () => {
  if (colorsOn) {
    // Desliga a mudança de cor dos botões
    serviceBtn.turningsOffColors();
    colorsOn = false;
  } else {
    // Liga a mudança de cor dos botões
    serviceBtn.turningsOnColors();
    colorsOn = true;
  }
};

btn.addEventListener("click", function () {
  onOffColors();
});
// PARTE DE PERSONALIZAÇÃO DE CORES DOS BOTOES

// PEGANDO NUMEROS DO BOTOES E SALVANDO NO ARRAY
const calculator = new Calculator();

window.pegandoNumeros = (valor) => {
  calculator.getNumbers(valor);
};