import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setApartmentService(apartment: string):void {
  runInAction(() => {
    dogRequestOrderStore.apartment = apartment
  })
}