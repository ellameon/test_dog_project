import {DogRecord} from "../../model/DogRecord";
import {dogsStore} from "../../store/DogRecordsStore";
import {runInAction} from "mobx";
import {webSocketSendService} from "../websocketservice/webSocketSendService";


export function addDogRecordToStoreService(dog: DogRecord): void {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
    webSocketSendService(String(dog.id))
  })
}
