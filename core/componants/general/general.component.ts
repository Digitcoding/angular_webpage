import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { pattern } from 'src/assets/pattern';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { HttproutingService } from 'src/app/shared/services/httprouting.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  Gender = [
    { id: 1, gender: 'Male' },
    { id: 2, gender: 'Female' }
  ];
  MaritalStatus = [
    { id: 1, status: 'Married' },
    { id: 2, status: 'UnMarried' }
  ];
  Department = [
    { id: 1, status: 'Development' },
    { id: 2, status: 'Testing' },
    { id: 3, status: 'Quality Checking' }
  ];
  Designation: any;
  EmpType = [
    { id: 1, status: 'Internal Employee ' },
    { id: 2, status: 'External Employee' }
  ];
  EmpCategory = [
    { id: 1, status: 'Centizen ' },
    { id: 2, status: 'ZenBasket' }
  ];
  Role: any;
  Repartmanager = [
    { id: 1, status: 'Boopathi Raja ' },
    { id: 2, status: 'Ashwini' }
  ];
  Location = [
    { id: 1, status: ' Chennai ' },
    { id: 2, status: 'Tirunelveli' }
  ];
  Holiday = [
    { id: 1, status: ' Citizen-TN ' }
  ];
  Ethinicity = [
    { id: 1, status: ' Asian ' },
    { id: 2, status: ' North-America' }
  ];
  NoticeBoard = [
    { id: 1, status: ' 30 ' },
    { id: 2, status: ' 60 ' }
  ]
  EmployeeRegistration!: FormGroup;
  message!: any;
  employeedetails!: any;
  todaydate = new Date();
  update = false;
  constructor(private authservice: AuthService,
    private validator: ValidatorsService,
    private employeeservice: EmployeeService,
    private route: ActivatedRoute) { }
  ngOnInit() {

    this.authservice.messages.subscribe(res => this.message = res);
    this.employeeservice.getDesignation().subscribe((res: any) => {
      this.Designation = res.designation;
      console.log("des", this.Designation);
    });
    this.employeeservice.getRole().subscribe((res: any) => {
      this.Role = res.role;
      console.log("role", this.Role);
    });
    //GET THE EMPLOYEECODE FROM TIMESHHEET USING PARAMS IN ACTIVEROUTE
    this.route.params.subscribe((res: any) => {
      console.log("params", res);
      if (res && res.data && res.employeecode) {
        this.update = true;
      }

      this.employeeservice.getEmployeeData({ employeecode: +res.employeecode }).subscribe((response: any) => {
        console.log("employeerecord", response);
        this.employeedetails = response.empdata;
        console.log("after", this.employeedetails);
        this.forminitialize();
      });
    });

  }
  forminitialize() {
    this.EmployeeRegistration = new FormGroup({
      employeecode: new FormControl(this.employeedetails && this.employeedetails.employeecode ? this.employeedetails.employeecode : null, [Validators.required, Validators.pattern(pattern.numberValidation)]),
      firstname: new FormControl(this.employeedetails && this.employeedetails.firstname ? this.employeedetails.firstname : null),
      middlename: new FormControl(this.employeedetails && this.employeedetails.middlename ? this.employeedetails.middlename : null, Validators.required),
      lastname: new FormControl(this.employeedetails && this.employeedetails.lastname ? this.employeedetails.lastname : null),
      email: new FormControl(this.employeedetails && this.employeedetails.email ? this.employeedetails.email : null, [Validators.required, Validators.email]),
      altermail: new FormControl(this.employeedetails && this.employeedetails.altermail ? this.employeedetails.altermail : null, Validators.required),
      gender: new FormControl(null),
      // marital: new FormControl(null),
      // department: new FormControl(null),
      designationId: new FormControl(this.employeedetails && this.employeedetails.designationId ? this.employeedetails.designationId : null),
      dob: new FormControl(this.employeedetails && this.employeedetails.dob ? this.employeedetails.dob : null),
      doj: new FormControl(this.employeedetails && this.employeedetails.doj ? this.employeedetails.doj : null),
      // emptype: new FormControl(null),
      // empcategory: new FormControl(null),
      roleId: new FormControl(this.employeedetails && this.employeedetails.roleId ? this.employeedetails.roleId : null),
      password: new FormControl(null),
      // location: new FormControl(null),
      // holiday: new FormControl(null),
      // ethinicity: new FormControl(null),
      // noticeperiod: new FormControl(null)

    }, this.validator.validatorarequal.bind(this));
  }
  onsubmit() {
    if (this.EmployeeRegistration.valid) {
      // console.log(this.EmployeeRegistration.value);
      if (!this.update) {
        console.log("add emp", this.EmployeeRegistration.value);
        this.employeeservice.createEmployee(this.EmployeeRegistration.value).subscribe((res: any) => {
          if (res) {
            // this.EmployeeRegistration.reset();
            console.log("response", res);
          }
        })
      }
      else {
        console.log("update emp", this.EmployeeRegistration.value);
        this.employeeservice.updateEmployee(this.EmployeeRegistration.value).subscribe((res: any) => {
          if (res) {
            console.log("upate", res);
          }
        })
      }


    }
  }
  canDeactivatefc() {
    return this.EmployeeRegistration ? !this.EmployeeRegistration.dirty : true;
  }
}

