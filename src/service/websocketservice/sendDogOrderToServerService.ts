import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";
import {runInAction} from "mobx";
import {webSocketStore} from "../../store/webSocketStore";
import {checkIsOrderValidService} from "../dogrecordrequestorderservice/checkIsOrderValidService";
import {webSocketSendOrderTransport} from "../../transport/webSocketSendOrderTransport";


export function sendDogOrderToServerService(): void {

  if (webSocketStore.isWebSocketOpen) {
    const order = JSON.stringify(dogRequestOrderStore)

    if (checkIsOrderValidService()) {
      webSocketSendOrderTransport(order)
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