export class Committer {
  name: string;
  email: string;
  date: string;
  html_url: string;

  constructor (rawItem) {
    this.name = rawItem.name;
    this.email = rawItem.email;
    this.date = rawItem.date;    
    this.html_url = rawItem.html_url;
  }
}
