import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setPhoneService(phone: string):void {
  runInAction(() => {
    dogRequestOrderStore.phone = phone
  })
}