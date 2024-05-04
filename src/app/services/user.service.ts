import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : []; 

  addUser(user: any) {
    const newUser = {
      ...user,
      id: Date.now() 
    };
    this.users = [...this.users, newUser];
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('userId', newUser.id.toString()); 
    console.log('Usuário criado com ID:', newUser.id); 
  }
  
  editUser(updatedUser: any) {
    const users = this.getUsers();
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  getUsers() {
    return this.users;
  }
}