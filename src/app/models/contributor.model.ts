import { UserItem } from "./user-item.model";

export class Contributor {
  contributor: UserItem;

  constructor (rawItem) {
    this.contributor = new UserItem(rawItem);
  }
}
