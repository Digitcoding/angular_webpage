import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HeaderService } from 'src/app/shared/services/header.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice:AuthService,
    private employeeservice:EmployeeService,private route:Router,private headerService:HeaderService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authservice.isAuthenticated()){
        console.log('inside if');
        const token=this.authservice.getToken();
        if(token){
           this.headerService.setHeader('default','Authorization',token);
        }
        
        return true
      }else{
        console.log('inside else'); 
        this.route.navigate(['/signin']); 
        return false
      }
  }
  
}
