import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { UserItem } from '../../models/user-item.model';
import { HeaderApi } from '../../models/header-api.model';
import { PaginationLink } from '../../models/pagination-link';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { autobind } from 'core-decorators';
import { PaginationLinkAttr } from '../../models/pagination-link-attr';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserPageComponent implements OnInit, OnDestroy {
  queryString = '';
  currentPage = 1;
  noResults: boolean;
  userItems: UserItem[] = [];
  searchNavigator: PaginationLink;
  rateLimitExceeded = false;
  routeChangeSubscription: Subscription;

  constructor (
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit () {
    this.routeChangeSubscription = this.route
      .queryParams
      .subscribe(this.onRouteQueryParamChange);
  }

  ngOnDestroy () {
    this.routeChangeSubscription.unsubscribe();
  }

  @autobind
  onRouteQueryParamChange (params) {
    const text = (params['q'] || '').trim();
    const page = Number(params['page']) || 1;

    this.queryString = text;
    this.currentPage = page;
    this.doSearch();
  }

  onSearchFormChange (text: string) {
    if (this.queryString === text) {
      return;
    }

    if (!text) {
      this.router.navigate([`search`]);
    }

    const q = this.queryString = text;
    const page = this.currentPage = 1;

    this.router.navigate(['search'], {
      queryParams: {
        q,
        page
      }
    });
  }

  doSearch () {
    const { queryString } = this;
    if (!queryString) {
      this.userItems = [];
      this.noResults = null;
      return;
    }
    this.userService
      .search(this.queryString,this.currentPage)
      .subscribe(this.onSearchResultSuccess, this.onSearchResultError);
  }

  onLinkSelect (linkItem: PaginationLinkAttr) {
    const { q, page } = linkItem;
    this.router.navigate(['search'], {
      queryParams: {
        q,
        page
      }
    });
  }

  @autobind
  onSearchResultSuccess (response: HttpResponse<any>) {
    const header = new HeaderApi(response.headers);
    this.noResults = response.body.total_count === 0;
    this.userItems = response.body.items.map(user => new UserItem(user));
    this.searchNavigator = header.link;
    console.log(this.searchNavigator);
  }

  @autobind
  onSearchResultError (response: HttpErrorResponse) {
    console.error(response);
  }
}