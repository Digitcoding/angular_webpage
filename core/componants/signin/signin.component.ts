import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { HttproutingService } from 'src/app/shared/services/httprouting.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  changePassword!: FormGroup;
  token = 'ASDHFK234H#$%AHDFLAKDF';
  user = {
    employeecode: '123',
    email: 'parameswari@centizen.com'
  }
  constructor(private router: Router,
    private employeeservice: EmployeeService,
   private  authService:AuthService) { }
  ngOnInit() {

    this.changePassword = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onsubmit() {
    if (this.changePassword.valid) {
      // if(this.changePassword.value.email ===this.user.email && this.changePassword.value.employeecode===this.user.employeecode){
      // sessionStorage.setItem('currentusertoken',JSON.stringify(this.token));
      //   this.router.navigate(['/app/dashboard']);
      // }
      // else{
      //   console.log('inside else');

      // }
      console.log("signvalue", this.changePassword.value);
console.log("SIGNINCOMPONENT");

      this.authService.sigin(this.changePassword.value).subscribe(
        {
          next:(res)=>{
        console.log("signindata", res);
        if(res&&res['user']){
          console.log("res",res);
              //  sessionStorage.setItem('currentusertoken', JSON.stringify(res.token));
          this.router.navigate(['/app/timesheet']);
        }
      },error:(err)=>{
        if(err&&err.error){
          console.log("invalid password");
          
        }
      }} );
    }
  }
}
     
