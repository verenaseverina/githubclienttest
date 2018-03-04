import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.routes';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { RepoService } from './service/repo.service';
import { RepoUserService } from './service/repo-user.service';
import { UserIndividualService } from './service/user-individual.service';
import { PaginationComponent } from './component/pagination/pagination.component';
import { UserItemComponent } from './component/user-item/user-item.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { RepoPageComponent } from './component/repo-page/repo-page.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    UserItemComponent,
    SearchPageComponent,
    UserPageComponent,
    RepoPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    RepoService,
    RepoUserService,
    UserIndividualService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
