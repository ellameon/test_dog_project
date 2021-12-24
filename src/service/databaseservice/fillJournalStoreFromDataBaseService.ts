import {selectDogsOfDateFromDataBaseService} from "./selectDogsOfDateFromDataBaseService";
import {runInAction} from "mobx";
import {journalStore} from "../../store/JournalStore";


export function fillJournalStoreFromDataBaseService(dateRange: Array<string>): void {

  const dateRangeLength = dateRange.length
  const date = new Date().toLocaleDateString("ru")

  for (let i = Number(dateRange[0]); i <= Number(dateRange[dateRangeLength - 1]); i++) {
    const dataKey = localStorage.key(i)
    console.log(dataKey)
    if (typeof dataKey === typeof date && dataKey !== null) {
      const dogsOfDateFromDataBase = selectDogsOfDateFromDataBaseService(dataKey)
      if (dogsOfDateFromDataBase !== undefined) {
        runInAction(() => {
          journalStore.dogs = journalStore.dogs.concat(dogsOfDateFromDataBase)
        })
      }
    }
  }
  console.log(journalStore.dogs.length)
}
