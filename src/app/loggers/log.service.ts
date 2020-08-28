import { Injectable, Inject } from "@angular/core";

import { LogHandler, LOG_HANDLERS } from "./log-handler";

@Injectable() export class LogService {
  constructor(@Inject(LOG_HANDLERS) private loggers: LogHandler[]) {
    console.log('Log Service Initialized', loggers);
  }

  log(message: string) {
    this.loggers.forEach(logger => logger.log(message));
  }
}
