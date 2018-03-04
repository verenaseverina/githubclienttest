export class UserItem {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;

  constructor (rawItem) {
    this.login = rawItem.login;
    this.id = rawItem.id;
    this.avatar_url = rawItem.avatar_url;
    this.url = rawItem.url;
    this.html_url = rawItem.html_url;
    this.repos_url = rawItem.repos_url;
    this.name = rawItem.name;
    this.company = rawItem.company || '';
    this.location = rawItem.location || '';
    this.email = rawItem.email;
    this.bio = rawItem.bio || '';
    this.public_repos = rawItem.public_repos;
    this.public_gists = rawItem.public_gists;
    this.followers = rawItem.followers;
    this.following = rawItem.following;
  }
}
