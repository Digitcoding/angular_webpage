import { Component } from '@angular/core';
import { AuthService } from './core/componants/auth/auth.service';
import { HttproutingService } from './shared/services/httprouting.service';
import { HeaderService } from './shared/services/header.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webpage';
  constructor(private authservice: AuthService,
    private header:HeaderService) { }
  ngOnInit() {
    this.authservice.getMessage();
     this.header.setHeader(environment.apiurl+'/ur/login','content-type','.assets/message.json');
  }
 

}
