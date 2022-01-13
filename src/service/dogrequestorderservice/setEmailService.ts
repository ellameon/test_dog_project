import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setEmailService(email: string):void {
  runInAction(() => {
    dogRequestOrderStore.email = email
  })
}