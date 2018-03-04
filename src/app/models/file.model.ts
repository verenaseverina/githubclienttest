export class File {
  name: string;
  path: string;
  type: string;
  html_url: string;

  constructor (rawItem) {
    this.name = rawItem.name;
    this.path = rawItem.path;
    this.type = rawItem.type;
    this.html_url = rawItem.html_url;
  }
}
