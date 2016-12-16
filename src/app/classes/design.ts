import { Attributes } from "./attributes";

export class Design {
  uuid: string;
  name: string;
  description: string;
  media: string;
  url: string;
  siteUuid: string;
  attributes: Attributes[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
