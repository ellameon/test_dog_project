import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";
import {runInAction} from "mobx";
import {webSocketStore} from "../../store/webSocketStore";
import {webSocketSendOrderService} from "./webSocketSendOrderService";
import {checkIsOrderValidService} from "../dogrecordrequestorderservice/checkIsOrderValidService";


export function sendDogOrderToServerService(): void {

  if (webSocketStore.isWebSocketOpen) {
    const order = JSON.stringify(dogRequestOrderStore)

    if (checkIsOrderValidService()) {
      webSocketSendOrderService(order)
      clearDogRequestOrderStore()
    }
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