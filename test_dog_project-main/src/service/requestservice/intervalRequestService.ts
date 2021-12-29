import {getDogFromServerService} from "../dogoperationservice/getDogFromServerService";

export function intervalRequestService(): number {
  return window.setInterval(getDogFromServerService, 30000);
}