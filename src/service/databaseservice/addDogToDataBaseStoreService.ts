import {runInAction} from "mobx";
import {dogDataBaseStore} from "../../store/DogDataBaseStore";
import {Dog} from "../../model/Dog";


export function addDogToDataBaseStoreService(dogRecord: Dog): void {
  runInAction(() => {
    dogDataBaseStore.dogs.push(dogRecord)
    dogDataBaseStore.dogsLastId = dogRecord.id
  })
}