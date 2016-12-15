import { Tag } from "./tag";

export class Tags {
  Items: Tag[];
  Count: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
