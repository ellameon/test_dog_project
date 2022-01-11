import {dogDataBaseStore} from "../../store/DogDataBaseStore";
import {selectDogsFromDataBaseService} from "./selectDogsFromDataBaseService";
import {runInAction} from "mobx";


export function fillDbStoreFromDataBaseService(): void {

  if(!dogDataBaseStore.init) {
    const dogsRecords = selectDogsFromDataBaseService()

    if (dogsRecords !== undefined) {
      const lastDogRecord = dogsRecords[dogsRecords.length - 1]
      runInAction(() => {
        dogDataBaseStore.dogs = dogsRecords
        dogDataBaseStore.dogsLastId = lastDogRecord.id
        dogDataBaseStore.init = true
      })
    }
  }
}