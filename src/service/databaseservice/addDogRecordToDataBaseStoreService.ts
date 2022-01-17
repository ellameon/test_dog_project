import {runInAction} from "mobx";
import {dogDataBaseStore} from "../../store/DogRecordsDataBaseStore";
import {DogRecord} from "../../model/DogRecord";


export function addDogRecordToDataBaseStoreService(dogRecord: DogRecord): void {
  runInAction(() => {
    dogDataBaseStore.dogs.push(dogRecord)
    dogDataBaseStore.dogsLastId = dogRecord.id
  })
}