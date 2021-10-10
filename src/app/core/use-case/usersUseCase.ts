import { Injectable } from '@angular/core';
import { UserRepository } from '../repositories/userRepository';

@Injectable({
  providedIn: 'root'
})

export class UsersUseCase {

  constructor(private userRepository: UserRepository){}

  public getUsers(){
    return this.userRepository.get();
  }

}
