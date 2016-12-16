export class Attribute {
  icon: string;
  name: string;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
