import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setCountryService(country: string):void {
  runInAction(() => {
    dogRequestOrderStore.country = country
  })
}