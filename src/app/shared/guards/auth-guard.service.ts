import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { delay, map } from 'rxjs/operators';
import { AuthenticatorService } from 'src/app/services/authenticator.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private authenticator: AuthenticatorService
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.firebaseService.userPromise().pipe(
      map((user) => {
        if (user && this.authenticator.authenticated) {
          this.firebaseService.loadUserInfo(user.email);

          return true;
        } else {
          this.router.navigateByUrl('login');
          return false;
        }
      })
    );
  }
}
