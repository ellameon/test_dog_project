import {observable} from "mobx";
import {Dog} from "../model/Dog";


export interface JournalStore {
  dogs: Array<Dog>,
  dogsToShow: Array<Dog>,
  idToFind: number
}

export const journalStore = observable<JournalStore>({
  dogs: [],
  dogsToShow: [],
  idToFind: 0
})