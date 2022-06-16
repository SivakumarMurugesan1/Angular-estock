import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  authenticateLogin(username:string, password:string) {
    //http://localhost:8083/authenticate'
    return this.httpClient.post<any>('http://43.204.141.83:8084/authenticate',{username,password}).pipe(
         map(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        console.log("userData",userData);
        return userData;
       }
     )
  
    );
  }

  isUserLoggedIn() :boolean{
    let user = sessionStorage.getItem('username')
    console.log(!(user === null));
    return !(user === null)
  }

  logOut() {
    alert("logging out")
    sessionStorage.removeItem('username')
  }
}
