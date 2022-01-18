import {runInAction} from "mobx";
import {dogRequestStore} from "../../store/DogRecordRequestStore";
import {fillPagesToShowService} from "./fillPagesToShowService";


export function fillDogRecordsOnPageService(): void {

  const fromId = (dogRequestStore.currentPage - 1) * 20
  const toId = fromId + 20

  runInAction(() => {
    dogRequestStore.dogsOnPage = dogRequestStore.dogs.slice(fromId, toId)
  })
  fillPagesToShowService()
}