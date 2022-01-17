import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";
import {webSocketSendService} from "./webSocketSendService";
import {runInAction} from "mobx";
import {webSocketStore} from "../../store/webSocketStore";


export function sendDogOrderToServerService(): void {

  if (webSocketStore.isWebSocketOpen) {
    runInAction(() => {
      dogRequestOrderStore.isFilled = true
    })
    const order = JSON.stringify(dogRequestOrderStore)
    webSocketSendService(order)
    clearDogRequestOrderStore()
  }
}

function clearDogRequestOrderStore(): void {
  runInAction(() => {
    dogRequestOrderStore.choosedDogId = 0
    dogRequestOrderStore.choosedDogUrl = ''
    dogRequestOrderStore.city = ''
    dogRequestOrderStore.street = ''
    dogRequestOrderStore.country = ''
    dogRequestOrderStore.house = ''
    dogRequestOrderStore.apartment = ''
    dogRequestOrderStore.firstName = ''
    dogRequestOrderStore.secondName = ''
    dogRequestOrderStore.surname = ''
    dogRequestOrderStore.email = ''
    dogRequestOrderStore.phone = ''
  })
}