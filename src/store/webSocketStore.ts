import {observable} from "mobx";


export interface WebSocketStore {
  isWebSocketOpen: boolean
}

export const webSocketStore = observable<WebSocketStore>({
  isWebSocketOpen: false
})