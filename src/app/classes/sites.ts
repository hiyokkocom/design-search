import { Site } from "./site";

export class Sites {
  Items: Site[];
  Count: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
