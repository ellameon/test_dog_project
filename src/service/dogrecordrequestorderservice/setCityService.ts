import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setCityService(city: string):void {
  runInAction(() => {
    dogRequestOrderStore.city = city
  })
}