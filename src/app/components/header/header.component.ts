import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass, AsyncPipe } from '@angular/common';
import { AuthService, User } from '@auth0/auth0-angular';

import { ButtonComponent } from '../button/button.component';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, AsyncPipe, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isHome: boolean = false;
  isAuthenticated$: Observable<boolean>;
  profile!: User | undefined | null;
  
  constructor(
    private router: Router,
    private auth: AuthService,
  ) {
    this.isAuthenticated$ = this.auth.isAuthenticated$;
  }
  
  
  ngOnInit(): void {
    this.isHome = this.router.url === '/home';

    this.auth.user$.subscribe((profile) => {
      console.log(profile)
      this.profile = profile;
      this.router.navigate([`/shopping-list/${profile?.sub}`]);
    })
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: { returnTo: document.location.origin },
    });
  }
}
