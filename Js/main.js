let calcul = document.getElementById("calcul");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case"c":
                calcul.innerText = "";
                break;
            case "supp":
                calcul.innerText = calcul.innerText.slice(0, -1);
                break;
            case "=":
                calcul.innerText = eval(calcul.innerText)
            default:
                calcul.innerText += e.target.innerText;
                break;
        }
    })
});