import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setDogRecordToRequestOrderStoreService(id: number, url: string): void {

  runInAction(() => {
    dogRequestOrderStore.choosedDogId = id
    dogRequestOrderStore.choosedDogUrl = url
  })
}