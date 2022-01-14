import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setHouseService(house: string):void {
  runInAction(() => {
    dogRequestOrderStore.house = house
  })
}