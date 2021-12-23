import {dogDataBaseStore} from "../store/DogDataBaseStore";
import {runInAction} from "mobx";

export function setDogsToDataBaseService(): void {

  const dogsToDataBase = dogDataBaseStore.dogsToDataBase
  const dataJSON = JSON.stringify(dogsToDataBase)

  runInAction(() => {
    localStorage.setItem("dogsInBase", dataJSON)
  })
}