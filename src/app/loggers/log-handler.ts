import { InjectionToken } from '@angular/core';

export abstract class LogHandler {
  abstract log(message: string);
}

export const LOG_HANDLERS = new InjectionToken<LogHandler[]>('LOG_HANDLERS');
