import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setFirstNameService(firstName: string):void {
  runInAction(() => {
    dogRequestOrderStore.firstName = firstName
  })
}