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
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService ) {}

  canActivate(): Observable<boolean> {
    return this.auth.appUser$
       .map((appUser) => appUser.isAdmin);
  }
}
