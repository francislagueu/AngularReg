import {BrowserModule } from "@angular/platform-browser";
import {HttpModule } from "@angular/http";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {MdModule} from './material.module';
import{
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from "angularfire2";


const firebaseConfig = {
    apiKey: "AIzaSyCI-uZ5IMmr9bdl2uSApFV3FGJ9zTareyM",
    authDomain: "angularreg-57ea3.firebaseapp.com",
    databaseURL: "https://angularreg-57ea3.firebaseio.com",
    storageBucket: "angularreg-57ea3.appspot.com",
    messagingSenderId: "1072512643650"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, {
      //provider: AuthProviders.Google,
      method:AuthMethods.Redirect
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
