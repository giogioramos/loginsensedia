import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformation {
  name: string = '';
  email: string | null = '';
  uid: string = '';
}

export class UserService {
  private info: UserInformation = {
    name: '',
    email: '',
    uid: '',
  };

  constructor() {}

  setInfo(name: string, email: string | null, uid: string) {
    this.info.name = name;
    this.info.email = email;
    this.info.uid = uid;
  }

  getInfo(): UserInformation {
    return this.info;
  }
}
