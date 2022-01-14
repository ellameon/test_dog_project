import {dogRequestStore} from "../../store/DogRecordRequestStore";
import {runInAction} from "mobx";

export function fillPagesToShowService(): void {
  let fromPage: number
  let toPage: number

  if (dogRequestStore.currentPage < 4){
    fromPage = 0
    toPage = 5
  } else if (dogRequestStore.currentPage > dogRequestStore.pagesCount.length - 2){
    fromPage = dogRequestStore.pagesCount.length - 3
    toPage = dogRequestStore.pagesCount.length + 1
  } else {
    fromPage = dogRequestStore.currentPage - 3
    toPage = dogRequestStore.currentPage + 2
  }

  runInAction(() => {
    dogRequestStore.pagesToShow = dogRequestStore.pagesCount.slice(fromPage, toPage)
  })
}