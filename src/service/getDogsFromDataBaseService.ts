import {runInAction} from "mobx";
import {DogToDataBase} from "../model/DogToDataBase";


export function getDogsFromDataBaseService(): Array<DogToDataBase> | undefined {

  const today = new Date().toLocaleDateString("ru")

  let dogsFromData = localStorage.getItem(today)
  let dogsFromDataBase;

  runInAction(() => {
    if (dogsFromData !== null) {
      dogsFromDataBase = JSON.parse(dogsFromData)
    }
  })
  return dogsFromDataBase

}