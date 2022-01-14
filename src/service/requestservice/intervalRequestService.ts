import {getDogRecordFromServerService} from "../dogoperationservice/getDogRecordFromServerService";

export function intervalRequestService(): number {
  return window.setInterval(getDogRecordFromServerService, 30000);
}