import { screen } from "./elements";

export const gitScreenContent = () => screen.textContent;

export const gitResult = (op) => eval(gitScreenContent());

export const setScreenContent = () => (screen.textContent = gitResult());
