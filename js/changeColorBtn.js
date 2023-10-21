import GetsElements from "./getElements.js";

const getElements = new GetsElements();
const btn_on_off = getElements.btnOnOff;
const containerButton = getElements.btnCalculator;
let intervalID; // Variável para armazenar o ID do intervalo
let colorsOn = true;

const generateColorRandom = () => {
  var letter = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
};

const turningsOnColors = () => {
  intervalID = setInterval(() => {
    let colorRandom = generateColorRandom();
    for (let index = 0; index < containerButton.length; index++) {
      containerButton[index].style.color = colorRandom;
      containerButton[index].style.transition = "0.5s";
      containerButton[index].style.boxShadow = `0 5px 10px ${colorRandom}`;
    }
  }, 1500);
};

btn_on_off.addEventListener("click", () => {
    if (colorsOn) {
        // Desliga a mudança de cor dos botões
        clearInterval(intervalID);
        for (let index = 0; index < containerButton.length; index++) {
          containerButton[index].style.color = "#fff";
          containerButton[index].style.boxShadow = "none";
        }
        colorsOn = false;
      } else {
        // Liga a mudança de cor dos botões
        turningsOnColors()
        colorsOn = true;
      }
})
