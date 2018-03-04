export class Issue {
  id: number;
  title: string;

  constructor (rawItem) {
    this.id = rawItem.id;
    this.title = rawItem.title;
  }
}
