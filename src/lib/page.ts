import { NUIElement } from "./NUIElement";

type PageConstructor = {
  target: string;
  name: string;
  children?: NUIElement[];
};

export class Page {
  target: string;
  name: string;
  children?: NUIElement[];

  constructor({ target, name, children }: PageConstructor) {
    this.target = target;
    this.name = name;
    this.children = children;
  }

  render(): void {
    let html = "";
    this.children?.forEach((element) => {
      html += element.render();
    });
    document.querySelector<HTMLDivElement>(this.target)!.innerHTML = html;
  }
}
