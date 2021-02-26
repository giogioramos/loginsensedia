import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseDatabaseService {
  constructor(private db: AngularFireDatabase) {}

  AddUser(user: any) {
    this.db.list('users').push(user);
  }

  getUser(
    email: string | null,
    cb: (name: string, email: string | null, uid: string) => void
  ) {
    let users = this.db.database.ref('users');

    users
      .orderByChild('email')
      .equalTo(email)
      .on('child_added', function (snapshot) {
        let name = snapshot.child('name').val();
        let uid = snapshot.child('uid').val();
        cb(name, email, uid);
      });
  }
}
