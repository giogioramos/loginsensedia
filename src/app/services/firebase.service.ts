import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirebaseDatabaseService } from './firebase-database.service';
import { UserService } from './user.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private firebaseDatabaseService: FirebaseDatabaseService,
    private userService: UserService
  ) {}

  userPromise(): Observable<any> {
    return this.angularFireAuth.authState;
  }

  loadUserInfo(email: string | null) {
    this.firebaseDatabaseService.getUser(email, (name, email, uid) => {
      this.userService.setInfo(name, email, uid);
    });
  }

  public async signin(email: string, password: string, cb = () => {}) {
    await this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.loadUserInfo(email);
        cb();
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  async signup(userEmail: string, userPassword: string, userName: string) {
    await this.angularFireAuth
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((res) => {
        this.firebaseDatabaseService.AddUser({
          name: userName,
          email: userEmail,
          uid: res.user?.uid,
        });
      });
  }

  logout(cb: () => void) {
    this.angularFireAuth.signOut();
    cb();
  }
}
