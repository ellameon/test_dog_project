import {Dog} from "../model/Dog";
import {dogsStore} from "../store/DogStore";
import {runInAction} from "mobx";


export function addDogService(dog: Dog): void {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
  })
}
