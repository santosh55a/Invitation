import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
import { Observable, of } from 'rxjs';

export interface User {
  id?: number;
  email: string;
  uniqueUser?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  private readonly url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  get(): Observable<User[]> {
     let vv: User[] = [
      { email: 'user0@santosh.com', uniqueUser: true },
       { email: 'user1@santosh.com', uniqueUser: true },
       { email: 'user1@santosh.com' }
     ];
     return of(vv);
   // return this.http.get<User[]>(this.url);
  }

  invite(user: User) {
    this.http.post<User>(this.url, user);
    return true
  }
}
