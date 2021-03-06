import { Component, Input, OnInit } from '@angular/core';
import { IUsers } from 'src/app/core/interfaces/IUsers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input() listUsers;

}
