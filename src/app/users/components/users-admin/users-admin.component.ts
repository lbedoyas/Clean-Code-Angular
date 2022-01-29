import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsers } from 'src/app/core/interfaces/IUsers';
import { UsersUseCase } from 'src/app/core/use-case/usersUseCase';
import { UidHelp } from 'src/app/utils/primeng/helpers/uid-help';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.scss']
})
export class UsersAdminComponent implements OnInit {
  form: FormGroup;
  usersData: IUsers;

  constructor(private formBuilder: FormBuilder, private usersUseCase: UsersUseCase, private generateNumber: UidHelp,) { }

  ngOnInit(): void {
    this.createForms();
  }

  createForms(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required]
    });
  }

  insert(data: any): void {
    console.log(data);
    const uid = this.generateNumber.generateNumber();
    this.usersData = {
      id: parseInt(uid),
      name: data.name,
      email: data.email
    }
    this.usersUseCase.postUsers(this.usersData).subscribe((response)=> {
      console.log(response);
    })
  }



}
