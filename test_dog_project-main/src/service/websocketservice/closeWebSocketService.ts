import {runInAction} from "mobx";
import {webSocketStore} from "../../store/webSocketStore";


export function closeWebSocketService(webSocket: WebSocket): void {

  webSocket.close()
  webSocket.onclose = function () {
    runInAction(() => {
      console.log('собаки отключились от сервера');
      webSocketStore.isWebSocketOpen = (webSocket.readyState !== 1)
    });
  }

}