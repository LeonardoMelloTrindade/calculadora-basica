import GetsElements from "./getElements.js";

const getElements = new GetsElements();
const containerButton = getElements.btnCalculator;
const input = getElements.input;
let intervalID;

const generateColorRandom = () => {
  var letter = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default class ServiceBtn {
  turningsOnColors = () => {
    intervalID = setInterval(() => {
      let colorRandom = generateColorRandom();
      for (let index = 0; index < containerButton.length; index++) {
        containerButton[index].style.color = colorRandom;
        containerButton[index].style.transition = "0.5s";
        containerButton[index].style.boxShadow = `0 5px 10px ${colorRandom}`;
      }
    }, 1500);
  };
  turningsOffColors = () => {
    clearInterval(intervalID);
    // document.getElementById("input-calculadora").disabled = false;
    for (let index = 0; index < containerButton.length; index++) {
      containerButton[index].style.boxShadow = "none";
      if (index == 0) {
        containerButton[index].style.color = "#fff";
      } else {
        containerButton[index].style.color = "#000";
      }
    }
  };
}
