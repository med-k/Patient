import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private url: string = "http://localhost:3000/user";

  constructor(private http:HttpClient) { }

  // get user
  GetUsers () : Observable<User[]> {
    return this.http.get<User[]>(this.url);
}
}
