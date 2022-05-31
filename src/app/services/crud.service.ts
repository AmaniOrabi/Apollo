import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

import {
  AngularFireList,
  AngularFireDatabase,
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
  getOne(email: any): any {
    return this.db.object('Clients');
  }
}
