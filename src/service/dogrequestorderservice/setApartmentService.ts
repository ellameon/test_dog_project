import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setApartmentService(apartment: string):void {
  runInAction(() => {
    dogRequestOrderStore.apartment = apartment
  })
}