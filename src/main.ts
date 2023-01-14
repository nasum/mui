import { Page } from "./lib/Page";
import { Div } from "./lib/Div";
import { NUIText } from "./lib/NUIText";
import { Input } from "./lib/Input";

const text = new NUIText("Hello nui!!");

const home = new Div({
  name: "home",
  children: [text],
});

const textInput = new Input({
  name: "text input",
  type: "text",
});

const buttonInput = new Input({
  name: "button input",
  type: "button",
  value: "submit",
});

const form = new Div({
  name: "test form",
  children: [textInput, buttonInput],
});

const page = new Page({
  target: "#app",
  name: "root",
  children: [home, form],
});

page.render();
