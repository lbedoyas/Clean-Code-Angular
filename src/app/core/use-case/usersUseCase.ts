import { Injectable } from '@angular/core';
import { IUsers } from '../interfaces/IUsers';
import { UserRepository } from '../repositories/userRepository';

@Injectable({
  providedIn: 'root'
})

export class UsersUseCase {

  constructor(private userRepository: UserRepository){}

  public getUsers(){
    return this.userRepository.get();
  }

  public postUsers(data: IUsers){
    return this.userRepository.insert(data);
  }

}
