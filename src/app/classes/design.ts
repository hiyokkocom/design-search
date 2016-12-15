export class Design {
  uuid: string;
  name: string;
  description: string;
  media: string;
  url: string;
  siteUuid: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
