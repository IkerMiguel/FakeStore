import { Component, inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Interfaces/store.interfaces';
import CardUserComponent from "../../Components/card-user/card-user.component";


@Component({
  selector: 'app-users',
  imports: [CardUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {
  userService = inject(UserService);
  users: User[] = [];

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((resp)=>{
      this.users = resp;
      console.log(this.users);
    });
  }
}
