export class UserSearchItem {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;

  constructor (rawItem) {
    this.login = rawItem.login;
    this.id = rawItem.id;
    this.avatar_url = rawItem.avatar_url;
    this.gravatar_id = rawItem.gravatar_id;
    this.url = rawItem.url;
    this.html_url = rawItem.html_url;
    this.followers_url = rawItem.followers_url;
    this.subscriptions_url = rawItem.subscriptions_url;
    this.organizations_url = rawItem.organizations_url;
    this.repos_url = rawItem.repos_url;
    this.received_events_url = rawItem.received_events_url;
    this.type = rawItem.type;
    this.score = rawItem.score;
  }
}
