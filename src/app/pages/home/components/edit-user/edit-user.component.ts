import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service'; 

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  user: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService 
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      function: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(15)]
      ]
    });
  }

  ngOnInit() {
    const userId = localStorage.getItem('userId'); 
    console.log('userId:', userId);  
    if (userId) {
      this.getUserToEdit(Number(userId)); 
    }
  }
  
  getUserToEdit(id: number) {
    const users = this.userService.getUsers();
    console.log('users:', users);  
    this.user = users.find(user => user.id === id);
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }
  saveUser() {
    if (this.userForm.valid) {
      if (!this.user) {
        console.error('User is undefined');
        return;
      }
      const userWithId = {
        ...this.userForm.value,
        id: this.user.id  
      };
      this.userService.editUser(userWithId);
      console.log('Usuário Editado:', userWithId);
      this.router.navigate(['/app/users']);
    }
  }
}