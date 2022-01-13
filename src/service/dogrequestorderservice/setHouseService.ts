import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setHouseService(house: string):void {
  runInAction(() => {
    dogRequestOrderStore.house = house
  })
}