import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/IUsers';

export abstract class UserRepository {
  abstract get(): Observable<IUsers>;
  abstract getById(id: string): Observable<any>;
  abstract insert(data: any): Observable<any>;
  abstract update(id: string): Observable<any>;
  abstract delete (id: string): Observable<any>;
}
