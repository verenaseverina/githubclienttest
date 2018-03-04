import { UserItem } from "./user-item.model";

export class PullRequest {
  id: number;
  title: string;
  user: UserItem;

  constructor (rawItem) {
    this.id = rawItem.id;
    this.title = rawItem.title;
    this.user = new UserItem(rawItem.user);
  }
}
