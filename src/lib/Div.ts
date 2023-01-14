import { NUIElement, ElementConstructor } from "./NUIElement";

export class Div extends NUIElement {
  private TAG_NAME = "div";

  constructor({ name, children }: ElementConstructor) {
    super({ name, children });
  }

  public render(): string {
    let html = "";
    this.children.forEach((element) => {
      html += element.render();
    });
    return `
      <${this.TAG_NAME}>
        ${html}
      </${this.TAG_NAME}>
    `;
  }
}
