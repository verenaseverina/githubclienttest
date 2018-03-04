import { Committer } from "./committer.model";

export class Commit {
  sha: string;
  committer: Committer;
  message: string;
  html_url: string;

  constructor (rawItem) {
    this.sha = rawItem.sha;
    this.committer = new Committer(rawItem.commit.committer);
    this.message = rawItem.commit.message;
    this.html_url = rawItem.html_url;
  }
}