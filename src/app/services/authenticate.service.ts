import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  [x: string]: any;

  constructor(private storage: Storage) { }

  loginUser(credentials: any) {

    return new Promise((accept, reject) => {

      const user = this.getRegisterUSer();

      user.then(u => {
        if (u.password == btoa(credentials.password)) {
          accept("Login Exitoso");
        } else {
          reject("Login Fallido");
        }
      })


    });
  }
 
  registerUser(userData: any){
    userData.password = (userData.password);
    return this.storage.set("user", userData);
  }
  getRegisterUSer(){
    return this.storage.get("user");
  }
}
