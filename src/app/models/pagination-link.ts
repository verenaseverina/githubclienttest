import { PaginationLinkAttr } from "./pagination-link-attr";

export interface PaginationLink {
  next?: PaginationLinkAttr;
  prev?: PaginationLinkAttr;
  first?: PaginationLinkAttr;
  last?: PaginationLinkAttr;
}