import { Page } from "./lib/Page";
import { Div } from "./lib/Div";
import { NUIText } from "./lib/NUIText";

const text = new NUIText("hoge");

const home = new Div({
  name: "home",
  children: [text],
});

const page = new Page({
  target: "#app",
  name: "root",
  children: [home],
});

page.render();
