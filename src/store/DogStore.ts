import {Dog} from "../model/Dog";
import {observable} from "mobx";


export interface DogStore {
  dogs: Array<Dog>,
  lastDogId: number,
}

export const dogsStore = observable<DogStore>({
  dogs: [],
  lastDogId: 0,
})