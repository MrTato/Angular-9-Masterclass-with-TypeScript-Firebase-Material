import { environment } from './../environments/environment';
import { UserService } from './services/user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { BuiltInStrDirComponent } from './components/built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from './components/built-in-attr-dir/built-in-attr-dir.component';
import { ChangeCaseDirective } from './directives/change-case/change-case.directive';
import { DirectiveHostComponent } from './components/directive-host/directive-host.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { NewUserComponent } from './components/new-user/new-user.component';
import { NewUserReactiveComponent } from './components/new-user-reactive/new-user-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    PlaceholderComponent,
    OneComponent,
    TwoComponent,
    BuiltInStrDirComponent,
    BuiltInAttrDirComponent,
    ChangeCaseDirective,
    DirectiveHostComponent,
    UnlessDirective,
    AppendorPipe,
    FilterPipe,
    NewUserComponent,
    NewUserReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
