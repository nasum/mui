import { Element } from "./BaseElement";

export class Page implements Element {
  target: string;
  name: string;
  html: string;

  constructor(target: string, name: string, html: string) {
    this.target = target;
    this.name = name;
    this.html = html;
  }

  render(): void {
    document.querySelector<HTMLDivElement>(this.target)!.innerHTML = this.html;
  }
}
