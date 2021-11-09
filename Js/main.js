import {clear} from "./modules/clear.js";
import {supp} from "./modules/supp.js";
import {calculzer} from "./modules/calcule.js";
// -----------------------------------------------------------------------
let calcul = document.getElementById("calcul");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "c":
                clear();
                break;

            case "supp":
                supp();
                break;

            case "=":
                calculzer();
                break;

            default:
                calcul.innerText += e.target.innerText;
                break;
        }
    })
})
// ----------------------------------------------------------------------------
