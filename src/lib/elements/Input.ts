import { NUIElement } from "./NUIElement";
type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type InputConstructor = {
  name: string;
  type: InputType;
  value?: string;
};

export class Input extends NUIElement {
  private TAG_NAME = "input";
  private type: InputType;
  private value: string | undefined;

  constructor({ name, type, value }: InputConstructor) {
    super({ name, children: [] });
    this.type = type;
    this.value = value;
  }

  private renderValue(): string {
    if (this.value) {
      return `value="${this.value}"`;
    } else {
      return "";
    }
  }

  public render(): string {
    return `
      <${this.TAG_NAME} type="${this.type}" ${this.renderValue()} />
    `;
  }
}
