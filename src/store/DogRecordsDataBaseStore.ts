import {observable} from "mobx";
import {Dog} from "../model/Dog";

export interface DogRecordsDataBaseStore {
  init: boolean
  dogs: Array<Dog>,
  dogsLastId: number
}

export const dogDataBaseStore = observable<DogRecordsDataBaseStore>({
  init: false,
  dogs: [],
  dogsLastId: 0
})