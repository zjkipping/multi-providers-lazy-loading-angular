import { Injectable } from "@angular/core";

import { LogHandler } from "./log-handler";

@Injectable() export class TelemetryLogHandler implements LogHandler {
  log(message: string) {
    console.log('telemetry log:', message);
  }
}
