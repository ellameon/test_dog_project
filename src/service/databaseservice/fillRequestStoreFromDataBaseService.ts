import {fillStoresFromDataBaseService} from "./fillStoresFromDataBaseService";
import {dogRequestStore} from "../../store/DogRecordRequestStore";
import {runInAction} from "mobx";
import {fillDogRecordsOnPageService} from "../paginationservice/fillDogRecordsOnPageService";


export function fillRequestStoreFromDataBaseService(): void {

  const fromDate = new Date('2021-01-26')
  const toDate = new Date()
  const allDogsFromDB = fillStoresFromDataBaseService(fromDate, toDate)

  runInAction(() => {
    dogRequestStore.dogs = [...allDogsFromDB]
    const numberOfPages = (dogRequestStore.dogs.length) / 20

    for (let i = 1; i <= numberOfPages; i++) {
      dogRequestStore.pagesCount.push(i)
    }
  })
  fillDogRecordsOnPageService()
}