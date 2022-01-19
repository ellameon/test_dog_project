import {webSocketStore} from "../../store/webSocketStore";
import {getWebSocketService} from "./getWebSocketService";
import {isAuthorized} from "../authservice/isAuthorized";


export function webSocketSendOrderService(value: string): void {

  if (!webSocketStore.isWebSocketOpen) {
    return
  }
  const webSocket = getWebSocketService()
  const isUserLogged = isAuthorized()
  if (!isUserLogged) {
    return;
  }
  if (webSocket !== undefined) {
    webSocket.send(JSON.stringify({action: "ORDER", data: value.toString()}))
  } else {
    return;
  }
}