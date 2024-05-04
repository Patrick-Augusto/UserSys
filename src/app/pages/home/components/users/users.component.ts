import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router, private userService: UserService) {} 

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  editUser(user: any) {
    this.router.navigate(['/app/edit-user']);
  }

  newUser() {
    this.router.navigate(['/app/add-user']);
  }
  deleteUser(user: any) {
    this.userService.deleteUser(user.id); 
    this.users = this.userService.getUsers(); 
  }
}