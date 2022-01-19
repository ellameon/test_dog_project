import {DogRecord} from "../../model/DogRecord";
import {dogsStore} from "../../store/DogRecordsStore";
import {runInAction} from "mobx";
import {webSocketSendEchoTransport} from "../../transport/webSocketSendEchoTransport";


export function addDogRecordToStoreService(dog: DogRecord): void {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
    webSocketSendEchoTransport(String(dog.id))
  })
}
