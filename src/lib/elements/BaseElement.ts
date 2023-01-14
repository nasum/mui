export interface BaseElement {
  name: string;
  children?: BaseElement[];

  render(): void;
}
