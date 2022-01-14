import {Dog} from "../../model/Dog";
import {dogsStore} from "../../store/DogRecordsStore";
import {runInAction} from "mobx";
import {webSocketSendService} from "../websocketservice/webSocketSendService";


export function addDogRecordToStoreService(dog: Dog): void {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
    webSocketSendService(dog.id)
  })
}
