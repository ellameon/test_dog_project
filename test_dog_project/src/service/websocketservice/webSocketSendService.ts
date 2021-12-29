import {runInAction} from "mobx";
import {getWebSocketService} from "./getWebSocketService";
import {webSocketStore} from "../../store/webSocketStore";
import {useIsLogged} from "../../hook/useIsLogged";

export function webSocketSendService(value: number): void {

  if (!webSocketStore.isWebSocketOpen) {
    return
  }

  const webSocket = getWebSocketService()

  runInAction(() => {

    const isUserLogged = useIsLogged()
    if (!isUserLogged) {
      return;
    }

    if (webSocket !== undefined) {
      webSocket.send(JSON.stringify({action: "ECHO", data: value.toString()}))
    } else {
      return;
    }
  })
}