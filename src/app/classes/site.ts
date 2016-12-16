import { Attributes } from "./attributes";

export class Site {
  uuid: string;
  name: string;
  description: string;
  media: string;
  url: string;
  attributes: Attributes[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
