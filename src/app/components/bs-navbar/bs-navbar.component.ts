import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';

import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent {
    appUser:AppUser;


  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser=> this.appUser = appUser)
  }

  logout() {
    this.auth.logout();
  }
}
