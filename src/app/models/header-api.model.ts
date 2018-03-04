import { HttpHeaders } from '@angular/common/http';
import { PaginationLink as Link } from './pagination-link';

const parse = require('parse-link-header');

export class HeaderApi {
  link: Link;

  constructor (headers: HttpHeaders) {
    const link = parse(headers.get('link'));
    this.link = link;
  }
}