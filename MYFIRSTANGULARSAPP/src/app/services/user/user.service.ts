import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _rootUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private _rootPostsUrl: string = 'http://jsonplaceholder.typicode.com/posts';
  private _prop: string = 'foo';
  public propChanged: BehaviorSubject<string> = new BehaviorSubject<string>(this._prop);

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

  private userList: AngularFireList<any>;

  constructor(
    private http: HttpClient,
    private firebase: AngularFireDatabase
    ) {
      this.userList = this.firebase.list('users');
    }

  getProp(): string {
    return this._prop;
  }

  addUser(user: IUser) {
    this._users.push(user);
  }

  setProp(prop: string) {
    this._prop = prop;
    this.propChanged.next(this._prop);
  }

  getUsers(): IUser[] {
    return this._users;
  }

  // The HttpHeaders are to send authorization tokens, or any other HttpHeaders needed
  getUsersViaREST(): Observable<IUser[]> {
    let headers = new HttpHeaders().set(
      `Authorization`,
      `Bearer your-access-token-here`
    );
    return this.http
      .get<IUser[]>(this._rootUrl, { headers })
      .pipe(
        map((users) => {
          return users.map((user) => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          });
        })
      );
  }

  getUserById(id: number): IUser {
    return this._users.filter((user) => user.id === id)[0];
  }

  getUserByIdViaREST(id: number): Observable<IUser> | any {
    return this.http
      .get<IUser>(`${this._rootUrl}/${id}`)
      .pipe(retry(3))
      .pipe(
        catchError((err) => {
          console.log('Got an error as: ', err);
          return err;
        })
      );
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._rootUrl, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this._rootUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this._rootUrl}/${id}`);
  }

  getUserPosts(id: number): Observable<any> {
    let params = new HttpParams().set('userId', id.toString());
    return this.http.get(this._rootPostsUrl, { params });
  }
}
