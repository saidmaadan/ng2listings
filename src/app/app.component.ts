import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { Listing } from './Listing';
import { Type } from './Type';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  listings: Listing[];
  types: Type[];
  appState: string;
  activeKey: string;

  constructor(private _fbs:FirebaseService){

  }

  ngOnInit(){
    this._fbs.getListings().subscribe(listings =>{
      this.listings = listings;
    });

    this._fbs.getTypes().subscribe(types =>{
      this.types = types;
    });
  }

  changeState(state, key){
    console.log('Changing State to:' +state);
    if(key){
      console.log('Changing key to:' +key);
      this.activeKey = key;
    }
    this.appState = state;
  }
}
