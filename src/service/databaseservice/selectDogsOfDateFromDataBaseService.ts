import {DogJournalRecord} from "../../model/DogDtoToDataBase";

export function selectDogsOfDateFromDataBaseService(date: string): Array<DogJournalRecord> | undefined {

  let dogsFromData = localStorage.getItem(date)
  let dogsOfDateFromDataBase;

  if (dogsFromData !== null) {
    dogsOfDateFromDataBase = JSON.parse(dogsFromData)
  }
  return dogsOfDateFromDataBase
}