import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map';
import { state } from '@angular/animations';
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot): any {
    return this.auth.user$.map((user) => {
      if (user) return true;

      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    });
  }
}
