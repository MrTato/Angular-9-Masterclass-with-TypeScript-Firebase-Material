import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  // With the pathMatch as prefix (default pathMatch), Angular will segment the URL into different paths
  { path: 'users', component: UsersComponent, pathMatch: 'prefix', children: [
    { path: ':userId', component: UserDetailsComponent },
    { path: '', component: PlaceholderComponent }
  ] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
