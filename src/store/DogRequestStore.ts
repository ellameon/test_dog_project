import {observable} from "mobx";
import {Dog} from "../model/Dog";

export interface DogRequestStore {
  dogs: Array<Dog>
  dogsOnPage: Array<Dog>
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