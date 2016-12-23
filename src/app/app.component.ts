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

  searchType(type){
    this._fbs.getListings(type).subscribe(types => {
      this.types = types;
    });
  }

  addListing(
    title:string,
    description:string,
    address:string,
    city:string,
    type:string,
    number_of_floors:string,
    property_type:string,
    price:string,
    beds:string,
    baths:string,
    image:string){
    var posted_at = new Date().toString();
    var newListing = {
      title: title,
      description: description,
      address: address,
      city: city,
      type: type,
      number_of_floors: number_of_floors,
      property_type: property_type,
      price: price,
      beds: beds,
      baths: baths,
      image: image,
      posted_at: posted_at
    }
  }
}
