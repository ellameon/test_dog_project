import {runInAction} from "mobx";
import {DogToDataBase} from "../model/DogToDataBase";


export function getDogsFromDataBaseService(): Array<DogToDataBase> | undefined {

  let dogsFromData = localStorage.getItem("dogsInBase")
  let dogsFromDataBase;

  runInAction(() => {
    if (dogsFromData !== null) {
      dogsFromDataBase = JSON.parse(dogsFromData)
    }
  })
  return dogsFromDataBase

}