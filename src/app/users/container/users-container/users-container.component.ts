import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUsers } from 'src/app/core/interfaces/IUsers';
import { UsersUseCase } from 'src/app/core/use-case/usersUseCase';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {

  listUsers$: Observable<IUsers>

  constructor(private userUsercase: UsersUseCase) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.listUsers$ = this.userUsercase.getUsers().pipe(tap(users => console.log(users)));
  }

}


