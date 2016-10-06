import { Component } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";

@Component({
//  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {};
  isAuth = false;
  authColor = 'warn';

  constructor(public af:AngularFire){
    this.af.auth.subscribe(
      user=>this._changeState(user),
      error=>console.trace(error)
    );
  }

  private _changeState(user:any=null){
    if(user){
      this.isAuth = true;
      this.authColor = 'primary';
      this.user = this._getUserInfo(user);
    }else{
      this.isAuth = false;
      this.authColor = 'warn';
      this.user = {};
    }
  }

  private _getUserInfo(user:any):any{
    if(!user){
      return {};
    }
    let data = user.auth.providerData[0];
    return{
      name:data.displayname,
      avatar:data.photoURL,
      email:data.email,
      provider:data.providerId
    };
  }

  private _getProvider(from:string){
    switch(from){
      case 'google': return AuthProviders.Google;
      case 'facebook': return AuthProviders.Facebook;
    }
  }

login(from:string){
  this.af.auth.login({
    provider:this._getProvider(from)
  });
}

logout(){
  this.af.auth.logout();
}


}
