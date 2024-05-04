import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'; 

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    userForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            function: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
        });
    }

    onSubmit() {
        if (this.userForm.valid) {
            const newUser = this.userForm.value;
            console.log('Novo Usuário Adicionado:', newUser);
            this.userService.addUser(newUser); 
            this.router.navigate(['/app/users']);
        }
    }
}