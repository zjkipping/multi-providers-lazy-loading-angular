import { Component, VERSION } from '@angular/core';

import { LogService } from './loggers/log.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private logService: LogService) { }

  logSomething() {
    this.logService.log('App Component');
  }
}
