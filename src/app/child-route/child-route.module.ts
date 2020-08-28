import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChildRouteComponent } from './child-route.component';
import { LogService } from '../loggers/log.service';
import { LOG_HANDLERS } from '../loggers/log-handler';
import { TelemetryLogHandler } from '../loggers/telemetry-log-handler.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildRouteComponent
      }
    ])
  ],
  providers: [
    LogService,
    {
      provide: LOG_HANDLERS,
      useClass: TelemetryLogHandler,
      multi: true
    }
  ],
  declarations: [ChildRouteComponent]
})
export class ChildRouteModule { }
