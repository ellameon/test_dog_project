import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setCountryService(country: string):void {
  runInAction(() => {
    dogRequestOrderStore.country = country
  })
}