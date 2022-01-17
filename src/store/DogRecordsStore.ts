import {DogRecord} from "../model/DogRecord";
import {observable} from "mobx";


export interface DogRecordsStore {
  dogs: Array<DogRecord>,
  lastDogId: number,
}

export const dogsStore = observable<DogRecordsStore>({
  dogs: [],
  lastDogId: 0,
})