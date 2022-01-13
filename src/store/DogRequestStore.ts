import {DogJournalRecord} from "../model/DogDtoToDataBase";
import {observable} from "mobx";

export interface DogRequestStore {
  dogs: Array<DogJournalRecord>
  dogsOnPage: Array<DogJournalRecord>
  currentPage: number
  pagesCount: Array<number>
  pagesToShow: Array<number>
}

export const dogRequestStore = observable<DogRequestStore> ({
  dogs: [],
  dogsOnPage: [],
  currentPage: 1,
  pagesCount: [],
  pagesToShow: []
})