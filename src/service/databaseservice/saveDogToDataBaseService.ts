import {fillDbStoreFromDataBaseService} from "./fillDbStoreFromDataBaseService";
import {addDogToDataBaseStoreService} from "./addDogToDataBaseStoreService";
import {saveDogsToDataBaseFromStoreService} from "./saveDogsToDataBaseFromStoreService";
import {dogDataBaseStore} from "../../store/DogDataBaseStore";
import {Dog} from "../../model/Dog";


export function saveDogToDataBaseService(dogRecord: Dog): void {
  fillDbStoreFromDataBaseService()
  const journalRecord = createDogJournalRecord(dogRecord)
  addDogToDataBaseStoreService(journalRecord)
  saveDogsToDataBaseFromStoreService()
}

function createDogJournalRecord(dogDto: Dog): Dog {
  const lastId = dogDataBaseStore.dogsLastId
  return {
    date: dogDto.date,
    id: lastId + 1,
    url: dogDto.url,
    status: dogDto.status
  }
}