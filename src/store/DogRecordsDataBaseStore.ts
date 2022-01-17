import {observable} from "mobx";
import {DogRecord} from "../model/DogRecord";

export interface DogRecordsDataBaseStore {
  init: boolean
  dogs: Array<DogRecord>,
  dogsLastId: number
}

export const dogDataBaseStore = observable<DogRecordsDataBaseStore>({
  init: false,
  dogs: [],
  dogsLastId: 0
})