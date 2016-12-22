import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Listing } from '../Listing';
import { Type } from '../Type';

@Injectable()
export class FirebaseService{
  listings: FirebaseListObservable<Listing[]>;
  types: FirebaseListObservable<Type[]>;

  constructor(private _angularFire: AngularFire){

  }

  getListings(){
    this.listings = this._angularFire.database.list('/listings') as 
    FirebaseListObservable<Listing[]>
    return this.listings;
  }

  getTypes(){
    this.types = this._angularFire.database.list('/types') as 
    FirebaseListObservable<Type[]>
    return this.types;
  }
}