import {runInAction} from "mobx";
import {webSocketService} from "./webSocketService";
import {webSocketStore} from "../store/webSocketOpenStore";
import {useIsLogged} from "../hook/useIsLogged";


const webSocket = webSocketService()

export function webSocketSendService(value: number): void {

  runInAction(() => {
    if (!webSocketStore.isWebSocketOpen) {
      return
    }
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