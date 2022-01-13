import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setSurnameService(surname: string):void {
  runInAction(() => {
    dogRequestOrderStore.surname = surname
  })
}