import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from 'src/app/core/interfaces/IUsers';
import { UserRepository } from 'src/app/core/repositories/userRepository';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends UserRepository {

  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {
    super();
  }

  get(): Observable<IUsers> {
    return this.http.get<IUsers>(this.url);
  }
  getById(id: string): Observable<IUsers> {
    throw new Error('Method not implemented.');
  }
  insert(data: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

}
