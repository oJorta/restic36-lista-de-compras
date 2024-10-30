import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isHome: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isHome = this.router.url === '/home'
  }

}
