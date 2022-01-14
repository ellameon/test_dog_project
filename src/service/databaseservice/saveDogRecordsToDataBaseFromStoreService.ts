import {dogDataBaseStore} from "../../store/DogRecordsDataBaseStore";
import {runInAction} from "mobx";


export function saveDogRecordsToDataBaseFromStoreService(): void {

  const dogsToDataBase = dogDataBaseStore.dogs
  const dataJSON = JSON.stringify(dogsToDataBase)

  runInAction(() => {
    const date = new Date().toLocaleDateString("ru")
    localStorage.setItem(date, dataJSON)
  })
}