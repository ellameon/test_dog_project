import {observable} from "mobx";
import {Dog} from "../model/Dog";

export interface DogDataBaseStore {
  init: boolean
  dogs: Array<Dog>,
  dogsLastId: number
}

export const dogDataBaseStore = observable<DogDataBaseStore>({
  init: false,
  dogs: [],
  dogsLastId: 0
})