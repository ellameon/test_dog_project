import {dogDataBaseStore} from "../../store/DogRecordsDataBaseStore";
import {selectDogRecordsFromDataBaseService} from "./selectDogRecordsFromDataBaseService";
import {runInAction} from "mobx";


export function fillDbStoreFromDataBaseService(): void {

  if(!dogDataBaseStore.init) {
    const dogsRecords = selectDogRecordsFromDataBaseService()

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