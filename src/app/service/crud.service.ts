import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import Tutorial from './../models/tutorial.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private dbPath = '/Clients';
  tutorialsRef: AngularFireList<Tutorial>;
  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list('Clients');
  }
  getAll(): AngularFireList<Tutorial> {
    return this.tutorialsRef;
  }
}
