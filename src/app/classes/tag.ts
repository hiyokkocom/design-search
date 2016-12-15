export class Tag {
  uuid: string;
  name: string;
  description: string;
  media: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
