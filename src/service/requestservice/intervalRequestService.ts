import {getDogRecordFromServerService} from "../dogrecordoperationservice/getDogRecordFromServerService";

export function intervalRequestService(): number {
  return window.setInterval(getDogRecordFromServerService, 30000);
}