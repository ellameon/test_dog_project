import {DogRecord} from "../../model/DogRecord";
import {dogsStore} from "../../store/DogRecordsStore";
import {runInAction} from "mobx";
import {webSocketSendEchoService} from "../websocketservice/webSocketSendEchoService";


export function addDogRecordToStoreService(dog: DogRecord): void {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
    webSocketSendEchoService(String(dog.id))
  })
}
