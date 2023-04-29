import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('delete', { static: true }) delete!: TemplateRef<any>;
  header = [
  {new:'New Announcement',
  jobs:'New Jobs',
  newhires:'New Hires'}
  ];
  message: any;
constructor(private dialog:DialogService,
  private authservice:AuthService){} 
ngOnInit(){
  this.authservice.messages.subscribe(res => this.message = res);
  
}



  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  onsubmit(){
    const dialogRef = this.dialog.openConfirmationDialog(this.message.DELETE);
    dialogRef.afterClosed().subscribe(response => {
      console.log(response);
  });
}
}