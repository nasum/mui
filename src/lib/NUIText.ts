import { NUIElement } from "./NUIElement";

export class NUIText extends NUIElement {
  private contents: string;

  constructor(contents: string) {
    super({ name: contents, children: [] });
    this.contents = contents;
  }

  public render(): string {
    return this.contents;
  }
}
