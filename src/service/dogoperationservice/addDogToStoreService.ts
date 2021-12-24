import {Dog} from "../../model/Dog";
import {dogsStore} from "../../store/DogStore";
import {runInAction} from "mobx";
import {webSocketSendService} from "../websocketservice/webSocketSendService";


export function addDogToStoreService(dog: Dog): void {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
    webSocketSendService(dog.id)
  })
}
