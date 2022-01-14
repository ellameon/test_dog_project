import {runInAction} from "mobx";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function setSecondNameService(secondName: string):void {
  runInAction(() => {
    dogRequestOrderStore.secondName = secondName
  })
}