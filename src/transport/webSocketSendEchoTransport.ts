import {getWebSocketService} from "../service/websocketservice/getWebSocketService";
import {webSocketStore} from "../store/webSocketStore";
import {isAuthorized} from "../service/authservice/isAuthorized";


export function webSocketSendEchoTransport(value: string): void {

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