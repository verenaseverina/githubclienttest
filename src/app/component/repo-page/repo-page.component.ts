import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { RepoItem } from '../../models/repo-item.model';
import { RepoUserService } from '../../service/repo-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { autobind } from 'core-decorators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Branch } from '../../models/branch.model';
import { Contributor } from '../../models/contributor.model';
import { Issue } from '../../models/issue.model';
import { PullRequest } from '../../models/pull-request.model';
import { Commit } from '../../models/commit.model';
import { File } from '../../models/file.model';

@Component({
  selector: 'app-repo-page',
  templateUrl: './repo-page.component.html',
  styleUrls: ['./repo-page.component.css']
})
export class RepoPageComponent implements OnInit {
  noResults: boolean;
  repoItem: RepoItem;
  queryString = '';
  routeChangeSubscription: Subscription;
  branch: Branch[] = [];
  contributor: Contributor[] = [];
  pull: PullRequest[] = [];
  issue: Issue[] = [];
  commit: Commit[] = [];
  file: File[] = [];
  username: string;
  repo: string;
  sub: any;

  constructor (
    private repoUserService: RepoUserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
      this.repo = params['repo'];
    });
  }

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

  ngOnInit () {
    this.doSearch();
    this.searchBranch();
    this.searchContributor();
    this.searchIssue();
    this.searchPullRequest();
    this.searchCommit();
    this.searchFile();
  }

  doSearch () {
    this.repoUserService
      .search(this.username,this.repo)
      .subscribe(this.onSearchResultSuccess, this.responseError);
  }
  
  searchBranch () {
    this.repoUserService
      .searchBranch(this.username,this.repo)
      .subscribe(this.searchBranchSuccess, this.responseError);
  }

  searchContributor () {
    this.repoUserService
      .searchContributor(this.username,this.repo)
      .subscribe(this.searchContributorSuccess, this.responseError);
  }

  searchIssue () {
    this.repoUserService
      .searchIssue(this.username,this.repo)
      .subscribe(this.searchIssueSuccess, this.responseError);
  }

  searchPullRequest () {
    this.repoUserService
      .searchPullRequest(this.username,this.repo)
      .subscribe(this.searchPullRequestSuccess, this.responseError);
  }

  searchCommit () {
    this.repoUserService
      .searchCommit(this.username,this.repo)
      .subscribe(this.searchCommitSuccess, this.responseError);
  }

  searchFile () {
    this.repoUserService
      .searchFile(this.username,this.repo)
      .subscribe(this.searchFileSuccess, this.responseError);
  }

  @autobind
  onSearchResultSuccess (response: HttpResponse<any>) {
    this.noResults = response.body.total_count === 0;
    this.repoItem = new RepoItem(response.body);
    // console.log(response.body);
  }

  @autobind
  searchBranchSuccess (response: HttpResponse<any>) {
    this.branch = response.body.map(br => new Branch(br));
    // console.log(response.body);
    // console.log(this.branch);
  }
  @autobind
  searchContributorSuccess (response: HttpResponse<any>) {
    this.contributor = response.body.map(ct => new Contributor(ct));
    // console.log(response.body);
    // console.log(this.contributor);
  }

  @autobind
  searchIssueSuccess (response: HttpResponse<any>) {
    this.issue = response.body.map(is => new Issue(is));
    // console.log(response.body);
    // console.log(this.issue);
  }

  @autobind
  searchPullRequestSuccess (response: HttpResponse<any>) {
    this.pull = response.body.map(pr => new PullRequest(pr));
    // console.log(response.body);
    // console.log(this.pull);
  }

  @autobind
  searchCommitSuccess (response: HttpResponse<any>) {
    this.commit = response.body.map(cm => new Commit(cm));
    // console.log(response.body);
    // console.log(this.commit);
  }

  @autobind
  searchFileSuccess (response: HttpResponse<any>) {
    this.file = response.body.map(fl => new File(fl));
    // console.log(response.body);
    // console.log(this.file);
  }

  @autobind
  responseError (response: HttpErrorResponse) {
    console.error(response);
  }
}