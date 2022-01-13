import {runInAction} from "mobx";
import {dogRequestStore} from "../../store/DogRequestStore";
import {fillPagesToShowService} from "./fillPagesToShowService";


export function setCurrentPageService(currentPage: number): void {
  runInAction(() => {
    if ( 0 < currentPage && currentPage < dogRequestStore.pagesCount.length + 1) {
      dogRequestStore.currentPage = currentPage
    }
  })
  fillPagesToShowService()
}