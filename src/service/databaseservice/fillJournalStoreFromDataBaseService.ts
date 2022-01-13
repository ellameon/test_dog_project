import {runInAction} from "mobx";
import {journalStore} from "../../store/JournalStore";
import {dateStore} from "../../store/DateStore";
import {fillStoresFromDataBaseService} from "./fillStoresFromDataBaseService";


export function fillJournalStoreFromDataBaseService(): void {

  const fromDate = dateStore.fromDate
  const toDate = dateStore.toDate
  const allDogsFromDB = fillStoresFromDataBaseService(fromDate, toDate)

  runInAction(() => {
    journalStore.dogs = [...allDogsFromDB]
    journalStore.dogsToShow = journalStore.dogs
  })
}




