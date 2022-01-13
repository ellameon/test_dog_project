import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setCityService(city: string):void {
  runInAction(() => {
    dogRequestOrderStore.city = city
  })
}