import {Dog} from "../model/Dog";
import {dogsStore} from "../store/DogStore";
import {runInAction} from "mobx";
import {webSocketSendService} from "./webSocketSendService";


export function addDogService(dog: Dog): void {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
    webSocketSendService(dog.id)
  })
}
