import {webSocketStore} from "../store/webSocketStore";
import {getWebSocketService} from "../service/websocketservice/getWebSocketService";
import {isAuthorized} from "../service/authservice/isAuthorized";


export function webSocketSendOrderTransport(value: string): void {

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