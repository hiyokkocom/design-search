import { Design } from "./design";

export class Designs {
  Items: Design[];
  Count: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
