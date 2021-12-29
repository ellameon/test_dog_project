import {observable} from "mobx";

export interface DateStore {
  fromDate: Date,
  toDate: Date
}

export const dateStore = observable<DateStore>({
  fromDate: new Date(2021, 11 , 23),
  toDate:  new Date()
})