import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { PaginationLink } from '../../models/pagination-link';
import { PaginationLinkAttr } from '../../models/pagination-link-attr';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input('pagination-link') paginationLink: PaginationLink;

  @Output('link-select') paginationLinkSelectEmitter = new EventEmitter<PaginationLinkAttr>();

  currentPageNumber = 0;

  ngOnChanges (changes) {
    if (changes.headerLink) {
      this.setCurrentPageNumber(changes.paginationLink.currentValue);
    }
  }

  // dumb heuristics to find the current page number for the UI
  setCurrentPageNumber (newPaginagionLink: PaginationLink) {
    console.log(newPaginagionLink);
    if (newPaginagionLink.next) {
      this.currentPageNumber = Number(newPaginagionLink.next.page) - 1;
    } else if (newPaginagionLink.prev) {
      this.currentPageNumber = Number(newPaginagionLink.prev.page) + 1;
    }
  }

  onClick (event: MouseEvent, paginationLinkAttr: PaginationLinkAttr) {
    event.preventDefault();
    console.log(paginationLinkAttr);
    const payload: PaginationLinkAttr = Object.assign({}, paginationLinkAttr);
    this.paginationLinkSelectEmitter.emit(payload);
  }

}