export class RepoItem {
  id : number;
  name : string;
  full_name : string;
  private : boolean;
  html_url : string;
  description : string;
  fork : boolean;
  size : number;
  stargazers_count : number;
  watchers_count : number;
  language : string;
  has_issues : boolean;
  has_projects : boolean;
  has_downloads : boolean;
  has_wiki : boolean;
  has_pages : boolean;
  forks_count : number;
  open_issues_count : number;
  forks : number;
  open_issues : number;
  watchers : number;
  default_branch : string;

  constructor (rawItem) {
    this.id = rawItem.id;
    this.name = rawItem.name;
    this.full_name = rawItem.full_name || "";
    this.private = rawItem.private;
    this.html_url = rawItem.html_url || "";
    this.description = rawItem.description || "";
    this.fork = rawItem.fork;
    this.size = rawItem.size;
    this.stargazers_count = rawItem.stargazers_count;
    this.watchers_count = rawItem.watchers_count;
    this.language = rawItem.language || "";
    this.has_issues = rawItem.has_issues;
    this.has_projects = rawItem.has_projects;
    this.has_downloads = rawItem.has_downloads;
    this.has_wiki = rawItem.has_wiki;
    this.has_pages = rawItem.has_pages;
    this.forks_count = rawItem.forks_count;
    this.open_issues_count = rawItem.open_issues_count;
    this.forks = rawItem.forks;
    this.open_issues = rawItem.open_issues;
    this.watchers = rawItem.watchers;
    this.default_branch = rawItem.default_branch;
  }
}
