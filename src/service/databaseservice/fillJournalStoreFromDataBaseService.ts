import {runInAction} from "mobx";
import {journalStore} from "../../store/JournalStore";
import {createDateRangeService} from "../dateservice/createDateRangeService";
import {DogJournalRecord} from "../../model/DogDtoToDataBase";
import {dateStore} from "../../store/DateStore";


export function fillJournalStoreFromDataBaseService(): void {

  const fromDate = dateStore.fromDate
  const toDate = dateStore.toDate

  const dateRange = createDateRangeService(fromDate, toDate)
  const dateRangeLength = dateRange.length
  let allDogsFromDB: Array<DogJournalRecord> = []

  for (let i = 0; i <= dateRangeLength; i++) {
    const key = dateRange[i]

    const dogsOfDayFromDBJSON = localStorage.getItem(key)
    if (dogsOfDayFromDBJSON !== null) {
      const dogsOfDayFromDB: Array<DogJournalRecord> = JSON.parse(dogsOfDayFromDBJSON)
      for (const dogJournalRecord of dogsOfDayFromDB) {
        dogJournalRecord.id = dogJournalRecord.id + allDogsFromDB.length
        const strDate = dogJournalRecord.date
        dogJournalRecord.date = new Date(strDate)
      }
      allDogsFromDB = allDogsFromDB.concat(dogsOfDayFromDB)
    }
  }
  runInAction(() => {
    journalStore.dogs = [...allDogsFromDB]
    journalStore.dogsToShow = []
  })
}

