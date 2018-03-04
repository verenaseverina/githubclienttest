import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { RepoPageComponent } from './component/repo-page/repo-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'search', component: UserPageComponent },
  { path: 'user/:username/:repo', component: RepoPageComponent }
];

export const Routing = RouterModule.forRoot(routes);