// import Calculadora from "./classCalculadora.js";
import GetsElements from "./getElements.js";
import ServiceBtn from "./changeColorBtn.js";

const getElements = new GetsElements();
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
