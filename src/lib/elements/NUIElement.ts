import { BaseElement } from "./BaseElement";

export type ElementConstructor = {
  name: string;
  children: NUIElement[];
};

export class NUIElement implements BaseElement {
  name: string;
  children: NUIElement[];

  constructor({ name, children }: ElementConstructor) {
    this.name = name;
    this.children = children;
  }

  render(): string {
    throw new Error("Method not implemented.");
  }
}
