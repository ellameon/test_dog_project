import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setStreetService(street: string):void {
  runInAction(() => {
    dogRequestOrderStore.street = street
  })
}