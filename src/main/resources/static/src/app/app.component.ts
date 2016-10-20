import { Component, OnInit } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppService } from './application/app.service';
import { UserCredentials } from './application/userCredentials';

@Component({
  selector: 'my-app',
  templateUrl: 'app.template.html',
  providers: [AppService]
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) { }
  userCredentials = new UserCredentials();

  ngOnInit() {
    this.appService.getUserCredentials()
      .subscribe(userCredentials => this.userCredentials = userCredentials);
  }
}

