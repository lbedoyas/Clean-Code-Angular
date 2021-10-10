import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './container/users-container/users-container.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PrimengModule } from '../utils/primeng/primeng.module';
import { DetailsUserComponent } from './components/details-user/details-user.component';

@NgModule({
  declarations: [
    UsersContainerComponent,
    UserListComponent,
    UsersAdminComponent,
    UsersPageComponent,
    DetailsUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PrimengModule
  ]
})
export class UsersModule { }
