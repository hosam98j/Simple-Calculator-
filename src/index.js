import {
  numbersButtons,
  operationsButtons,
  screen,
  equalButton,
} from "./js/elements";
import { gitScreenContent, gitResult, setScreenContent } from "./js/util";
import "./sass/style.scss";

for (let i = 0; i < numbersButtons.children.length; i++) {
  numbersButtons.children[i].onclick = (e) => {
    screen.innerHTML += e.target.textContent;
    console.log(gitScreenContent());
  };
}

for (let i = 0; i < operationsButtons.children.length; i++) {
  operationsButtons.children[i].onclick = (e) => {
    screen.innerHTML += e.target.textContent;
    console.log(gitScreenContent());
  };
}

equalButton.onclick = () => setScreenContent();
