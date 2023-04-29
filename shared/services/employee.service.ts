import { Injectable } from '@angular/core';
import { HttproutingService } from './httprouting.service';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  user = new BehaviorSubject<any>(null);
  constructor(private httpservice: HttproutingService) { }
  getDesignation() {
    return this.httpservice.getMethod('getDesignation');
  }
  getRole() {
    return this.httpservice.getMethod('getRole');
  }
  createEmployee(data: any) {
    return this.httpservice.postMethod('createEmployee', data);
  }
  signinEmployee(data: any) {
    return this.httpservice.postMethod('login', data);
  }
  getEmployees() {
    return this.httpservice.getMethod('getEmployees');
  }
  deleteEmployee(data: any) {
    return this.httpservice.postMethod('deleteEmployee', data);
  }
  getEmployeeData(data: any) {
    return this.httpservice.postMethod('getEmployeeData', data);
  }
  updateEmployee(data: any) {
    return this.httpservice.postMethod('updateEmployee', data);
  }



}
