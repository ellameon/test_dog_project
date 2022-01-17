import {observable} from "mobx";
import {DogRecord} from "../model/DogRecord";

export interface DogRecordRequestStore {
  dogs: Array<DogRecord>
  dogsOnPage: Array<DogRecord>
  currentPage: number
  pagesCount: Array<number>
  pagesToShow: Array<number>
}

export const dogRequestStore = observable<DogRecordRequestStore> ({
  dogs: [],
  dogsOnPage: [],
  currentPage: 1,
  pagesCount: [],
  pagesToShow: []
})