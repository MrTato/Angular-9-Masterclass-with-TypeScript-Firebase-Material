import { UserService } from './../../services/user/user.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveGuard implements Resolve<IUser[]> {

  constructor(private userService: UserService) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): IUser[] {
      return this.userService.getUsers();
    }
}
