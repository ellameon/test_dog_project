import {journalStore} from "../../store/JournalStore";
import {runInAction} from "mobx";

export function selectJournalRecordService(): void {
  if (journalStore.idToFind !== 0)  {
  const findedDog =  journalStore.dogs.filter(dog => dog.id = journalStore.idToFind)
    if (findedDog !== undefined) {
      runInAction(() => {
        journalStore.dogsToShow = findedDog
      })

    }
  }
}