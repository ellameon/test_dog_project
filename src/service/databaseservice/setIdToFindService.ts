import {journalStore} from "../../store/JournalStore";
import {runInAction} from "mobx";


export function setIdToFindService(findId: number): void {

  if (journalStore.dogs === []) {
    return
  }
  runInAction(() => {
    if (Math.abs(findId) > journalStore.dogs.length) {
      journalStore.idToFind = journalStore.dogs.length
    } else {
      journalStore.idToFind = Math.abs(findId)
    }
  })
}