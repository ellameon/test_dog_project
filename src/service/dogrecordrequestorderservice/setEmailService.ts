import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setEmailService(email: string):void {
  runInAction(() => {
    dogRequestOrderStore.email = email
  })
}