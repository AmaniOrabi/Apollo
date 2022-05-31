import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { from } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentUser$ = authState(this.auth);
  public userData: any;
  public email: any;
  constructor(private auth: Auth, private crud: CrudService) {}
  login = (email: string, password: string) => {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  };
  logout = () => {
    return from(this.auth.signOut());
  };
  getCurrent = () => {
    return this.currentUser$;
  };
  getEmailFromObserver = () => {
    this.currentUser$.subscribe((user) => (this.email = user?.email));
  };
  setData() {
    this.getEmailFromObserver();
    this.crud
      .getAll()
      .valueChanges()
      .subscribe((users) => {
        const user = users.filter((user) => user.email === this.email);
        console.log(JSON.stringify(user[0]));

        this.setUserData({
          email: user[0].email,
          ecg: user[0].ECG,
          firstName: user[0].first_name,
          age: user[0].age,
          gender: user[0].gender,
          lastName: user[0].last_name,
        });
      });
  }
  setUserData(user: any) {
    this.userData = user;
  }
}
