export let calculzer = () => {
let arrayNumbers = calcul.textContent.split(/x|-|\/|\+|\*/);  
let arrayOperators = calcul.textContent.split(/\d+/);
arrayOperators.forEach( operator => {
    if (operator == "+" && arrayNumbers[1]){
        calcul.innerText = Number(arrayNumbers[0]) + Number(arrayNumbers[1]);
    }
    else if (operator == "-" && arrayNumbers[1]) {
        calcul.innerText = Number(arrayNumbers[0]) - Number(arrayNumbers[1]);

    }
    else if (operator == "*" && arrayNumbers[1]) {
        calcul.innerText = Number(arrayNumbers[0]) * Number(arrayNumbers[1]);

    }
    else if (operator == "/" && arrayNumbers[1]) {
        calcul.innerText = Number(arrayNumbers[0]) / Number(arrayNumbers[1]);
    }
})
}
