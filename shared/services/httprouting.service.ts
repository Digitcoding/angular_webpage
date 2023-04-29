import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogoutGuard } from 'src/app/core/componants/auth/logout.guard';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttproutingService {
  constructor(private httprouting: HttpClient) { }
  // empurl=environment.employeeurl;
  // getJsonMethod(url: string) {
  //   return this.httpservice.get('./assets/' + url);
  // }
  // addemployee(data:any): Observable<any>{
  //   return this.httpservice.post(this.empurl,data);
  // }
  // getemployee():Observable<any>{
  //   return this.httpservice.get(this.empurl);
  // }
  apiurl = environment.apiurl;
  getMethod(url: string) {
    return this.httprouting.get(this.apiurl + 'vr/' + url)
  }
  postMethod(url: string, data: any) {
  console.log("postmethosd");
  
    console.log('postdata', data);
    return this.httprouting.post(this.apiurl + 'vr/' + url, data);
  }
  getMessageMethod(url: string) {
    return this.httprouting.get('./assets/' + url);
  }
}
