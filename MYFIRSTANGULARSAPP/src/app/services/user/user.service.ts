import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _rootUrl: string = 'http://jsonplaceholder.typicode.com/users';

  private _users: IUser[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      email: 'Rey.Padberg@karina.biz',
    },
  ];

  constructor(private http: HttpClient) {}

  getUsers(): IUser[] {
    return this._users;
  }

  getUsersViaREST(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._rootUrl);
  }

  getUserById(id: number): IUser {
    return this._users.filter((user) => user.id === id)[0];
  }

  getUserByIdViaREST(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this._rootUrl}/${id}`);
  }
}
