import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { UserRepository } from './core/repositories/userRepository';
import { UsersService } from './infraestructure/users-services/users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: UserRepository, useClass: UsersService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
