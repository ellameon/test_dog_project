import {fillDbStoreFromDataBaseService} from "./fillDbStoreFromDataBaseService";
import {addDogRecordToDataBaseStoreService} from "./addDogRecordToDataBaseStoreService";
import {saveDogRecordsToDataBaseFromStoreService} from "./saveDogRecordsToDataBaseFromStoreService";
import {dogDataBaseStore} from "../../store/DogRecordsDataBaseStore";
import {DogRecord} from "../../model/DogRecord";


export function saveDogRecordToDataBaseService(dogRecord: DogRecord): void {
  fillDbStoreFromDataBaseService()
  const journalRecord = createDogJournalRecord(dogRecord)
  addDogRecordToDataBaseStoreService(journalRecord)
  saveDogRecordsToDataBaseFromStoreService()
}

function createDogJournalRecord(dogDto: DogRecord): DogRecord {
  const lastId = dogDataBaseStore.dogsLastId
  return {
    date: dogDto.date,
    id: lastId + 1,
    url: dogDto.url,
    status: dogDto.status
  }
}