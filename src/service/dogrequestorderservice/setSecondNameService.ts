import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRequestOrderStore";


export function setSecondNameService(secondName: string):void {
  runInAction(() => {
    dogRequestOrderStore.secondName = secondName
  })
}