import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setStreetService(street: string):void {
  runInAction(() => {
    dogRequestOrderStore.street = street
  })
}