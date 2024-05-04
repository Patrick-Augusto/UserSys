import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  totalUsers: number = 0;
  functions: {function: string, count: number}[] = [
    {function: 'Engenheiro de FE', count: 0},
    {function: 'Engenheiro de BE', count: 1},
    {function: 'Analista de dados', count:1},
    {function: 'Líder Técnico', count: 1}
  ];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.totalUsers = this.userService.getUsers().length;
    this.functions.forEach(func => {
      func.count = this.userService.getUsers().filter(user => user.function === func.function).length;
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}