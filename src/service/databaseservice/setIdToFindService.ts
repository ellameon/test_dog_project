import {journalStore} from "../../store/JournalStore";
import {runInAction} from "mobx";


export function setIdToFindService(findId: number): void {

  if (journalStore.dogs === []) {
    return
  }
  if (findId > journalStore.dogs.length) {
    runInAction(() => {
      journalStore.idToFind = journalStore.dogs.length
    })
  } else {
    runInAction(() => {
      journalStore.idToFind = Math.abs(findId)
    })
  }
}