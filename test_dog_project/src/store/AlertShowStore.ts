import {observable} from "mobx";


export interface AlertShowStore {
  isAlertShown: boolean
}

export const alertShowStore = observable<AlertShowStore>({
  isAlertShown: true
})