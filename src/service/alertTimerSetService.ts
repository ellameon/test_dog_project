import {alertShowService} from "./alertShowService";


export function alertTimerSetService(): number {
  return window.setTimeout(alertShowService, 5000);
}