import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { MessageListComponent } from './components/message-list/message-list.component';
import { AuthGuard } from './guards/auth/auth.guard';
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
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'about', component: AboutComponent },
  // With the pathMatch as prefix (default pathMatch), Angular will segment the URL into different paths
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'prefix',
    canActivateChild: [ AuthGuard ],
    children: [
      { path: ':userId', component: UserDetailsComponent },
      // { path: '', component: PlaceholderComponent }
    ]
  },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ ConfirmationGuard ] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard ],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
