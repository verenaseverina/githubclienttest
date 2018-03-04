import { Component, Input, Directive } from '@angular/core';
import { UserItem } from '../../models/user-item.model';
import { RepoItem } from '../../models/repo-item.model';
import { UserSearchItem } from '../../models/user-search-item.model';
import { ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { autobind } from 'core-decorators';
import { UserIndividualService } from '../../service/user-individual.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { RepoService } from '../../service/repo.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserItemComponent implements OnInit {
  @Input('user-list') userList: UserSearchItem;

  individu: UserItem;
  listRepo: RepoItem[] = [];
  
  noResultsForDetail: boolean;
  noResultsForRepo: boolean;
  username: string;

  constructor(
    private userIndividualService: UserIndividualService,
    private repoService: RepoService,
  ) {}

  ngOnInit () {
    const text = this.userList.login;

    this.username = text;
    this.findDetail();
    this.searchRepo();
  }

  findDetail () {
    const { username } = this;
    this.userIndividualService
      .search(this.username)
      .subscribe(this.findDetailSuccess, this.findDetailError);
  }

  @autobind
  findDetailSuccess (response: HttpResponse<any>) {
    this.noResultsForDetail = response.body.total_count === 0;
    this.individu = new UserItem(response.body);
    // console.log(this.individu);
  }

  @autobind
  findDetailError (response: HttpErrorResponse) {
    console.error(response);
  }

  searchRepo () {
    const { username } = this;
    this.repoService
      .search(this.username)
      .subscribe(this.repoSearchSuccess, this.repoSearchError);
  }

  @autobind
  repoSearchSuccess (response: HttpResponse<any>) {
    this.listRepo = response.body.map(repo => new RepoItem(repo));
    console.log(response.body);
  }

  @autobind
  repoSearchError (response: HttpErrorResponse) {
    console.error(response);
  }
}
