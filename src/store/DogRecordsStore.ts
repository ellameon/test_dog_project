import {Dog} from "../model/Dog";
import {observable} from "mobx";


export interface DogRecordsStore {
  dogs: Array<Dog>,
  lastDogId: number,
}

export const dogsStore = observable<DogRecordsStore>({
  dogs: [],
  lastDogId: 0,
})