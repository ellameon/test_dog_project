import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setPhoneService(phone: string):void {
  runInAction(() => {
    dogRequestOrderStore.phone = phone
  })
}