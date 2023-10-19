document.addEventListener("DOMContentLoaded", function() {
    const btnCalculator = document.querySelectorAll('section')
    
    let changeColorBtn = () => {
        let colorRandom = generateColorRandom();
        for (let index = 0; index < btnCalculator.length; index++) {
            btnCalculator[index].style.color = colorRandom;
            btnCalculator[index].style.transition = '0.7s'
        }
    }
    
    let generateColorRandom = () => {
        var letter = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letter[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setInterval(changeColorBtn, 1500);
});
