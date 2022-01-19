import {getWebSocketService} from "./getWebSocketService";
import {webSocketStore} from "../../store/webSocketStore";
import {isAuthorized} from "../authservice/isAuthorized";


export function webSocketSendEchoService(value: string): void {

  if (!webSocketStore.isWebSocketOpen) {
    return
  }
  const webSocket = getWebSocketService()
  const isUserLogged = isAuthorized()
  if (!isUserLogged) {
    return;
  }
  if (webSocket !== undefined) {
    webSocket.send(JSON.stringify({action: "ECHO", data: value.toString()}))
  } else {
    return;
  }
}