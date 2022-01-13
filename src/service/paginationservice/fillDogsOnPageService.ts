import {runInAction} from "mobx";
import {dogRequestStore} from "../../store/DogRequestStore";
import {fillPagesToShowService} from "./fillPagesToShowService";

export function fillDogsOnPageService(): void {

  const fromId = (dogRequestStore.currentPage - 1) * 20
  const toId = fromId + 20

  runInAction(() => {
    dogRequestStore.dogsOnPage = dogRequestStore.dogs.slice(fromId, toId)
  })
  fillPagesToShowService()
}