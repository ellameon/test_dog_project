import {runInAction} from "mobx";
import {dateStore} from "../../store/DateStore";


export function setFromDateService(fromDate: Date):void {
  runInAction(() => {
    dateStore.fromDate = fromDate
  })
}