import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userToken = sessionStorage.getItem('token');

    console.log("adding headers",req);
    console.log("userToken",userToken);
    const modifiedReq = req.clone({

      headers: req.headers.set('token', `Bearer ${userToken}`),

    });

    return next.handle(modifiedReq);

  }
}
