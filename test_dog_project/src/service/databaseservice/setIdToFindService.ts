import {journalStore} from "../../store/JournalStore";
import {runInAction} from "mobx";

export function setIdToFindService(findId: number): void {

  if (journalStore.dogs === []) {
    return
  }
  runInAction(() => {
    journalStore.idToFind = Math.abs(findId)
  })
}