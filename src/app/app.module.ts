import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FirebaseKey } from './FirebaseKey';
import { NavbarComponent } from './navbar/navbar.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "FirebaseKey.API_Key",
  authDomain: "ng2listings.firebaseapp.com",
  databaseURL: "https://ng2listings.firebaseio.com",
  storageBucket: "ng2listings.appspot.com"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
