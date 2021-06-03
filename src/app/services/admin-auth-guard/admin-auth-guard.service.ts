import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { switchMap } from 'rxjs/operators';

import 'rxjs/operator/map';
import { Observable, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.user$
      .pipe(switchMap((user) => this.userService.get(user.uid)))
      .map((appUser) => appUser.isAdmin);
  }
}
