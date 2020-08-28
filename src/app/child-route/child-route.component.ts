import { Component } from '@angular/core';

import { LogService } from '../loggers/log.service';

@Component({
  selector: 'app-child-route',
  templateUrl: './child-route.component.html',
  styleUrls: ['./child-route.component.css']
})
export class ChildRouteComponent {
  constructor(private logService: LogService) { }

  logSomething() {
    this.logService.log('Child Component');
  }
}