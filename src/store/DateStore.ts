import {observable} from "mobx";

export interface DateStore {
  fromDate: Date,
  toDate: Date
}

export const dateStore = observable<DateStore>({
  fromDate: new Date(),
  toDate:  new Date()
})