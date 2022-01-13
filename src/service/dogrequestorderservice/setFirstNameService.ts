import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setFirstNameService(firstName: string):void {
  runInAction(() => {
    dogRequestOrderStore.firstName = firstName
  })
}