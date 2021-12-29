import {runInAction} from "mobx";
import {webSocketStore} from "../../store/webSocketStore";
import {userStore} from "../../store/UserStore";

let webSocket: WebSocket | undefined

export function getWebSocketService() {
  const isUserLogged = (userStore.login !== '')
  if (isUserLogged) {
    if (webSocket === undefined || webSocket.readyState === webSocket.CLOSED) {
      webSocket = new WebSocket('ws://localhost:9000');
      webSocket.onopen = function () {
        runInAction(() => {
          console.log('собаки подключились к серверу');
          webSocketStore.isWebSocketOpen = (webSocket?.readyState === 1)
        });
      }
    }
  }
  return webSocket
}