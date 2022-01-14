import {runInAction} from "mobx";
import {dogDataBaseStore} from "../../store/DogRecordsDataBaseStore";
import {Dog} from "../../model/Dog";


export function addDogRecordToDataBaseStoreService(dogRecord: Dog): void {
  runInAction(() => {
    dogDataBaseStore.dogs.push(dogRecord)
    dogDataBaseStore.dogsLastId = dogRecord.id
  })
}