import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PaginationLink } from '../../models/pagination-link';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchPageComponent {
  queryString = '';
  routeChangeSubscription: Subscription;

  constructor (
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSearchFormChange (text: string) {
    const q = this.queryString = text;
    const page = 1;
    this.router.navigate(['search'], {
      queryParams: {
        q,
        page
      }
    });
  }
}