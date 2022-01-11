import {journalStore} from "../../store/JournalStore";
import {runInAction} from "mobx";


export function selectJournalRecordService(): void {
  (journalStore.idToFind !== 0) ?
    runInAction(() => {
      const findedDog = journalStore.dogs.find(dog => dog.id === journalStore.idToFind)
      if (findedDog !== undefined) {
        journalStore.dogsToShow = [findedDog]
      }
    })
    :
    runInAction(() => {
      journalStore.dogsToShow = journalStore.dogs
    })

}