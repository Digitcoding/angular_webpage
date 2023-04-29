import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { HttproutingService } from 'src/app/shared/services/httprouting.service';
import { AuthService } from '../auth/auth.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  ELEMENT_DATA!: any[];
  dataSource!: MatTableDataSource<any>;
  constructor(
    private http: HttproutingService,
    private employeeservice: EmployeeService,
    private dialogService: DialogService,
    private authService: AuthService,
    private router:Router) { }
  ngOnInit() {
    this.authService.messages.subscribe(res => this.message = res);
    this.employeeservice.getEmployees().subscribe((res: any) => {
      if (res) {
        console.log('getemp', res);
        this.ELEMENT_DATA = res.response;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
    // this.getEmployeeList();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  message!: any;
  displayedColumns: string[] = [
    'employeecode',
    'firstname',
    'lastname',
    'middlename',
    'email',
    'altermail',
    'designationId',
    'dob',
    'doj',
    'roleId',
    'action'
  ];
  onDelete(element: any) {
    console.log("element", element);
    const dialogRef = this.dialogService.openConfirmationDialog(this.message.DELETE);
    dialogRef.afterClosed().subscribe(response => {
      console.log("response", response);
      if (response) {
        this.employeeservice.deleteEmployee({ employeecode: element.employeecode }).subscribe((res: any) => {
          if (res.deleteId) {
            console.log('deleteid', res.deleteId);
            const index = this.ELEMENT_DATA.findIndex(x => x.employeecode === element.employeecode);
            if (index != -1) {
              this.ELEMENT_DATA.splice(index, 1);
              this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
              this.dataSource.paginator = this.paginator;
            }

          }
        })

      }
    })

  }

onEdit(element:any){
  this.router.navigate(['/app/info/general',"edit",element.employeecode]);
}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
