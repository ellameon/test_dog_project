import {DogDtoToDataBase, DogJournalRecord} from "../../model/DogDtoToDataBase";
import {fillDbStoreFromDataBaseService} from "./fillDbStoreFromDataBaseService";
import {addDogToDataBaseStoreService} from "./addDogToDataBaseStoreService";
import {saveDogsToDataBaseFromStoreService} from "./saveDogsToDataBaseFromStoreService";
import {dogDataBaseStore} from "../../store/DogDataBaseStore";


export function saveDogToDataBaseService(dogToDataBase: DogDtoToDataBase): void {
  fillDbStoreFromDataBaseService()
  const journalRecord = createDogJournalRecord(dogToDataBase)
  addDogToDataBaseStoreService(journalRecord)
  saveDogsToDataBaseFromStoreService()
}

function createDogJournalRecord(dogDto: DogDtoToDataBase): DogJournalRecord {
  const lastId = dogDataBaseStore.dogsLastId
  return {
    date: dogDto.date,
    id: lastId + 1,
    url: dogDto.url,
  }
}