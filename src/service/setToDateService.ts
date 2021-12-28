import {runInAction} from "mobx";
import {dateStore} from "../store/DateStore";


export function setToDateService(toDate: Date):void {
  runInAction(() => {
    dateStore.toDate = toDate
  })
}