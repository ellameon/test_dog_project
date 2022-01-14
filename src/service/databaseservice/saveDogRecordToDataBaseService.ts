import {fillDbStoreFromDataBaseService} from "./fillDbStoreFromDataBaseService";
import {addDogRecordToDataBaseStoreService} from "./addDogRecordToDataBaseStoreService";
import {saveDogRecordsToDataBaseFromStoreService} from "./saveDogRecordsToDataBaseFromStoreService";
import {dogDataBaseStore} from "../../store/DogRecordsDataBaseStore";
import {Dog} from "../../model/Dog";


export function saveDogRecordToDataBaseService(dogRecord: Dog): void {
  fillDbStoreFromDataBaseService()
  const journalRecord = createDogJournalRecord(dogRecord)
  addDogRecordToDataBaseStoreService(journalRecord)
  saveDogRecordsToDataBaseFromStoreService()
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