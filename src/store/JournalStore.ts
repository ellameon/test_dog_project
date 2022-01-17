import {observable} from "mobx";
import {DogRecord} from "../model/DogRecord";


export interface JournalStore {
  dogs: Array<DogRecord>,
  dogsToShow: Array<DogRecord>,
  idToFind: number
}

export const journalStore = observable<JournalStore>({
  dogs: [],
  dogsToShow: [],
  idToFind: 0
})