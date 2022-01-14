import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setSurnameService(surname: string):void {
  runInAction(() => {
    dogRequestOrderStore.surname = surname
  })
}