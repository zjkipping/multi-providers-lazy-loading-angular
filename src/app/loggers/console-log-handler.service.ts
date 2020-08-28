import { Injectable } from "@angular/core";
import { LogHandler } from "./log-handler";


@Injectable() export class ConsoleLogHandler implements LogHandler {
  log(message: string) {
    console.log('console log:', message);
  }
}
