import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isHome: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isHome = this.router.url === '/home'
  }

  login(): void {
    
  }

}
