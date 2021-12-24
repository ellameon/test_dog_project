import {runInAction} from "mobx";
import {dogDataBaseStore} from "../../store/DogDataBaseStore";
import {DogJournalRecord} from "../../model/DogDtoToDataBase";


export function addDogToDataBaseStoreService(dogJournalRecord: DogJournalRecord): void {
  runInAction(() => {
    dogDataBaseStore.dogs.push(dogJournalRecord)
    dogDataBaseStore.dogsLastId = dogJournalRecord.id
  })
}