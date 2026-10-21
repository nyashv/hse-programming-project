console.log("приветики");
// 1011. Определить значение функции Z = 1/(XY) при произвольных X и Y. //
function calculateZ(x,y) {
    if (x === 0 || y === 0) {
        return "делить на ноль было ошибкой…";
    }
    let z = 1 / (x * y);
        return z;
    }
function runtask() {
    const inputX = document.getElementById("inputX");
    const inputY = document.getElementById("inputY");
    const output = document.getElementById("result_output");

    let xValue = parseFloat(inputX.value);
    let yValue = parseFloat(inputY.value);

if (isNaN(xValue) || isNaN(yValue)) {
        output.innerText = "Значение функции Z =\n Чтобы получить результат \n нужно ввести все числа!";
        return;
}
let finish = calculateZ(xValue, yValue);

output.innerText = "Значение функции Z =\n" + finish;
}
const calcButton = document.getElementById("calc_btn");
calcButton.addEventListener('click', runtask);