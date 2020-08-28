import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LOG_HANDLERS } from './loggers/log-handler';
import { ConsoleLogHandler } from './loggers/console-log-handler.service';
import { LogService } from './loggers/log.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'child',
        pathMatch: 'full'
      },
      {
        path: 'child',
        loadChildren: () => import('./child-route/child-route.module').then(m => m.ChildRouteModule)
      }
    ])
  ],
  declarations: [ AppComponent ],
  providers: [
    LogService,
    {
      provide: LOG_HANDLERS,
      useClass: ConsoleLogHandler,
      multi: true
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
