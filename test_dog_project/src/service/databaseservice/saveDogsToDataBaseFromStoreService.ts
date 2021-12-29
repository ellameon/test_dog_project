import {dogDataBaseStore} from "../../store/DogDataBaseStore";
import {runInAction} from "mobx";

export function saveDogsToDataBaseFromStoreService(): void {

  const dogsToDataBase = dogDataBaseStore.dogs
  const dataJSON = JSON.stringify(dogsToDataBase)

  runInAction(() => {
    const date = new Date().toLocaleDateString("ru")
    localStorage.setItem(date, dataJSON)
  })
}