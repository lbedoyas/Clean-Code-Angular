import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUsers } from 'src/app/core/interfaces/IUsers';
import { UserRepository } from 'src/app/core/repositories/userRepository';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post<any>(this.url + '/posts', body, httpOptions).pipe(catchError(err => of(err)));
  }
  update(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<any> {
    throw new Error('Method not implemented.');
  }

}
