import {DogJournalRecord} from "../../model/DogDtoToDataBase";


export function selectDogsFromDataBaseService(): Array<DogJournalRecord> | undefined {

  const date = new Date().toLocaleDateString("ru")

  let dogsFromData = localStorage.getItem(date)
  let dogsFromDataBase;

  if (dogsFromData !== null) {
    dogsFromDataBase = JSON.parse(dogsFromData)
  }
  return dogsFromDataBase
}