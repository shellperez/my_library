import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const urlServer = "https://librarypca.fly.dev/";
const httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"}) };

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  [x: string]: any;

  urlServer = "https:/Librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({'content-Type': 'application/json'})};

  constructor(
    private storage: Storage, 
    private http: HttpClient
    ) { }

  loginUserLocal(credentials: any) {
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
 
  registerUserLocal(userData: any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
  getRegisterUSer(){
    return this.storage.get("user");
  }
  
  loginUser(credentials: any){
    return new Promise( (accept, reject) => {
      let params = {
        "user": credentials
      }
      this.http.post(`${this.urlServer}login`, params, this.httpHeaders).subscribe( (data: any) => {
        if (data.status == "OK") {
          accept(data);
        }else{
          reject(data.errors)
        }
      }, (error) => {
        reject("Error en Login")
      })
    })
  }

  registerUser(userData: any){
    let params = {
      "user": userData
    }
    return new Promise( (accept, reject) => {
      this.http.post(`${this.urlServer}signup`,params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK"){
          accept(data.msg);
        }else{
          reject(data.errors)
        }
      },(error) => {
        reject("Error al intentar registrarse")
      })
    })
  }
}
