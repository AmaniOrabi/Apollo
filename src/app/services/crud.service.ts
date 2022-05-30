import { Injectable } from '@angular/core';
// import {
//   AngularFireDatabase,
//   AngularFireList,
// } from '@angular/fire/compat/database';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private dbPath = '/Clients';
  tutorialsRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list('Clients');
  }
  getAll(): AngularFireList<any> {
    return this.tutorialsRef;
  }
}
