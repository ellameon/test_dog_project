import {Dog} from "../model/Dog";
import {dogsStore} from "../stores/DogStore";
import {runInAction} from "mobx";

export const addDogService = (dog: Dog) => {
  runInAction(() => {
    dogsStore.dogs.push(dog)
    dogsStore.lastDogId = dog.id
  })
}
