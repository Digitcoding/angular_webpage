import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { HttproutingService } from 'src/app/shared/services/httprouting.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  messages = new BehaviorSubject<any>(null);
  user = new BehaviorSubject<any>(null);
  constructor(private httpservice: HttproutingService,
    private route: Router) { }
  getMessage() {
    this.httpservice.getMessageMethod('message.json').subscribe((res: any) => {
      console.log("message", res);
      this.messages.next(res);
    });
  }

  isAuthenticated() {
    let token;
    const data = sessionStorage.getItem('currentUserToken');
    console.log('data', data);//string format

    if (data) {
      const currentuser = JSON.parse(data);
      console.log('cur', currentuser);
      if (currentuser) {
        token = currentuser;
        console.log('token', token);

        return token != null;
      }
    }
    else {
      return false;
    }
    return true
  }
  getRefreshToken() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken') || '');
    const refreshToken = currentUser ? currentUser.refreshToken : null;
    return this.httpservice.postMethod('refreshToken', { refreshToken })
  }
  // sigin(data: any) {
  //   return this.httpservice.postMethod('login', data).pipe(map((res: any) => {
  //     if (res && res['user'] && res['token']) {
  //       this.user.next(res['user']);
  //       sessionStorage.setItem('currentUserToken', JSON.stringify({ token: res['token'], refreshToken: res['refreshToken'] }))
  //     }
  //     return res;
  //   }), catchError((err:any) => {
  //     return throwError(err)
  //   }));
  // }
  getToken(): string {
    let token;
    const currentUser = JSON.parse(sessionStorage.getItem('currentUserToken') || '');
    if (currentUser) {
      token = currentUser.token;
    }
    return token;
  }
  onLogout() {
    sessionStorage.removeItem('currentusertoken');
    return true;
  }
  sigin(data: any) {
    console.log("AUTHSERVICE");
    return this.httpservice.postMethod('login', data).pipe(map((res: any) => {
      if (res && res['user'] && res['token']) {
        this.user.next(res['user']);
        sessionStorage.setItem('currentUserToken', JSON.stringify({ token: res['token'], refreshToken: res['refreshToken'] }))
      }
      return res;
    }), catchError((err: any) => {
      return throwError(err)
    }));
  }

}
