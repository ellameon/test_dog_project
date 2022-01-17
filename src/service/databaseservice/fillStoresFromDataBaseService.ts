import {createDateRangeService} from "../dateservice/createDateRangeService";
import {DogRecord} from "../../model/DogRecord";
import {getDogRecordsFromDataBaseTransport} from "../../transport/getDogRecordsFromDataBaseTransport";


export function fillStoresFromDataBaseService(fromDate: Date, toDate: Date): Array<DogRecord> {

  const dateRange = createDateRangeService(fromDate, toDate)
  const dateRangeLength = dateRange.length
  let allDogsFromDB: Array<DogRecord> = []

  for (let i = 0; i <= dateRangeLength; i++) {
    const key = dateRange[i]

    const dogsOfDayFromDBJSON = getDogRecordsFromDataBaseTransport(key)
    if (dogsOfDayFromDBJSON !== null) {
      const dogsOfDayFromDB: Array<DogRecord> = JSON.parse(dogsOfDayFromDBJSON)
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