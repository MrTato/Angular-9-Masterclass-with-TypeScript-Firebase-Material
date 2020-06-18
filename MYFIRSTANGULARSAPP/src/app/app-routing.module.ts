import { DirectiveHostComponent } from './components/directive-host/directive-host.component';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';
import { ParentComponent } from './components/parent/parent.component';
import { UsersResolveGuard } from './guards/UsersResolve/users-resolve.guard';
import { UserService } from './services/user/user.service';
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
import { BuiltInAttrDirComponent } from './components/built-in-attr-dir/built-in-attr-dir.component';
import { NewUserComponent } from './components/new-user/new-user.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent, canActivate: [ AuthGuard ] },
  { path: 'about', component: AboutComponent },
  // With the pathMatch as prefix (default pathMatch), Angular will segment the URL into different paths
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'prefix',
    // canActivateChild: [ AuthGuard ],
    resolve: {
      users: UsersResolveGuard
    },
    children: [
      { path: ':id', component: UserDetailsComponent, resolve: { users: UsersResolveGuard } },
      { path: '', component: PlaceholderComponent }
    ]
  },
  { path: 'parent', component: ParentComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'str-dir', component: BuiltInStrDirComponent },
  { path: 'attr-dir', component: BuiltInAttrDirComponent },
  { path: 'directives', component: DirectiveHostComponent },
  { path: 'messages', component: MessageListComponent, canDeactivate: [ ConfirmationGuard ] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  providers: [ AuthGuard, ConfirmationGuard, UserService, UsersResolveGuard ],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
