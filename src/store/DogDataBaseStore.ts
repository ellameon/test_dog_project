import {DogJournalRecord} from "../model/DogDtoToDataBase";
import {observable} from "mobx";

export interface DogDataBaseStore {
  init: boolean
  dogs: Array<DogJournalRecord>,
  dogsLastId: number
}

export const dogDataBaseStore = observable<DogDataBaseStore>({
  init: false,
  dogs: [],
  dogsLastId: 0
})