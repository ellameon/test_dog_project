import {Dog} from "../../model/Dog";


export function selectDogsFromDataBaseService(): Array<Dog> | undefined {

  const date = new Date().toLocaleDateString("ru")

  let dogsFromData = localStorage.getItem(date)
  let dogsFromDataBase;

  if (dogsFromData !== null) {
    dogsFromDataBase = JSON.parse(dogsFromData)
  }
  return dogsFromDataBase
}