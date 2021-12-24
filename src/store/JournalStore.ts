import {observable} from "mobx";
import {DogJournalRecord} from "../model/DogDtoToDataBase";


export interface JournalStore {
  dogs: Array<DogJournalRecord>,
}

export const journalStore = observable<JournalStore>({
  dogs: [],
})