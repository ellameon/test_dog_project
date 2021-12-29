import {observable} from "mobx";
import {DogJournalRecord} from "../model/DogDtoToDataBase";


export interface JournalStore {
  dogs: Array<DogJournalRecord>,
  dogsToShow: Array<DogJournalRecord>,
  idToFind: number
}

export const journalStore = observable<JournalStore>({
  dogs: [],
  dogsToShow: [],
  idToFind: 0
})