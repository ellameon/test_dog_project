import {createDateRangeService} from "../dateservice/createDateRangeService";
import {Dog} from "../../model/Dog";


export function fillStoresFromDataBaseService(fromDate: Date, toDate: Date): Array<Dog> {

  const dateRange = createDateRangeService(fromDate, toDate)
  const dateRangeLength = dateRange.length
  let allDogsFromDB: Array<Dog> = []

  for (let i = 0; i <= dateRangeLength; i++) {
    const key = dateRange[i]

    const dogsOfDayFromDBJSON = localStorage.getItem(key)
    if (dogsOfDayFromDBJSON !== null) {
      const dogsOfDayFromDB: Array<Dog> = JSON.parse(dogsOfDayFromDBJSON)
      for (const dogJournalRecord of dogsOfDayFromDB) {
        dogJournalRecord.id = dogJournalRecord.id + allDogsFromDB.length
        const strDate = dogJournalRecord.date
        dogJournalRecord.date = new Date(strDate)
      }
      allDogsFromDB = allDogsFromDB.concat(dogsOfDayFromDB)
    }
  }
  return allDogsFromDB
}