import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { AuthService } from 'src/app/core/componants/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  
  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isRefreshingToken!: boolean;

  constructor(private headerServices: HeaderService,
    private authService:AuthService, private router: Router, private employeeService: EmployeeService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor");
    return next.handle(this.setHeaders(request)).pipe(catchError((err: any) => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        return this.handleError(request, next);
      }
      return throwError(err);
    }))

  }
  handleError(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.refreshTokenSubject.next(null);
      return this.authService
        .getRefreshToken().pipe(switchMap((token: any) => {
          this.isRefreshingToken = true;
          this.refreshTokenSubject.next(token['aceessToken']);
          this.headerServices.setHeader('default', 'Authorization', token['accessToken']);
          sessionStorage.setItem('token', token['accessToken']);
          return next.handle(this.setHeaders(request));
        }), catchError((err: any) => {
          this.isRefreshingToken = false;
          this.router.navigate(['/loginPage']);
          return throwError(err);
        }));
    } else {
      return this.refreshTokenSubject.pipe(filter(token => token !== null),
        take(1), switchMap(jwtToken => next.handle(this.setHeaders(request))));
    }


  }
  setHeaders(request: HttpRequest<any>) {
    console.log("interceptor setheader");
    
    console.log('setHeaders intercept', request.url);
    const headers = this.headerServices.getHeaders(request.url);
    return headers ? request.clone({
      setHeaders: headers
    }) : request
  }
}

