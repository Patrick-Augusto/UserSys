import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  totalUsers: number = 3; 
  functions: {function: string, count: number}[] = [
    {function: 'Engenheiro de FE', count: 0},
    {function: 'Engenheiro de BE', count: 1},
    {function: 'Analista de dados', count:1},
    {function: 'Líder Técnico', count: 1}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}

