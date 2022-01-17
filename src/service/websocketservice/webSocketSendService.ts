import {runInAction} from "mobx";
import {getWebSocketService} from "./getWebSocketService";
import {webSocketStore} from "../../store/webSocketStore";
import {useIsLogged} from "../../hook/useIsLogged";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";

export function webSocketSendService(value: string): void {

  if (!webSocketStore.isWebSocketOpen) {
    return
  }

  const webSocket = getWebSocketService()

  runInAction(() => {

    const isUserLogged = useIsLogged()
    if (!isUserLogged) {
      return;
    }

    if (webSocket !== undefined && !dogRequestOrderStore.isFilled) {
      webSocket.send(JSON.stringify({action: "ECHO", data: value.toString()}))
    } else if (webSocket !== undefined && dogRequestOrderStore.isFilled) {
      webSocket.send(JSON.stringify({action: "ORDER", data: value.toString()}))
    } else {
      return;
    }
  })
}