import {runInAction} from "mobx";
import {webSocketStore} from "../store/webSocketOpenStore";
import {userStore} from "../store/UserStore";


export function webSocketService() {
  const isUserLogged = (userStore.login !== '')
  if (isUserLogged) {

    const webSocket = new WebSocket('ws://localhost:9000');
    webSocket.onopen = function () {
      runInAction(() => {
        console.log('собаки подключились к серверу');
        webSocketStore.isWebSocketOpen = (webSocket.readyState === 1)
      });
    }
    webSocket.onclose = function () {
      runInAction(() => {
        console.log('собаки отключились от сервера');
        webSocketStore.isWebSocketOpen = (webSocket.readyState === 0)
      });
    }
    return webSocket
  }
}