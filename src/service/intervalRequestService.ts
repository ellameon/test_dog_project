import {getDogFromServerAndAddService} from "./getDogFromServerAndAddService";

export function intervalRequestService(): number {
  return window.setInterval(getDogFromServerAndAddService, 30000);
}