import {DogToDataBase} from "../model/DogToDataBase";
import {observable} from "mobx";

export interface DogDataBaseStore  {
  dogsToDataBase: Array<DogToDataBase>,
  dogsToDataBaseLastId: number
}

export const dogDataBaseStore = observable<DogDataBaseStore>({
  dogsToDataBase: [],
  dogsToDataBaseLastId: 0
})