import {runInAction} from "mobx";
import {alertShowStore} from "../../store/AlertShowStore";
import {clearAlertTimeoutService} from "./clearAlertTimeoutService";
import {timerStore} from "../../store/TimerStore";


export function orderAlertShowService(): void {

  runInAction(() => {
    alertShowStore.isAlertShown = true
  })
  clearAlertTimeoutService(timerStore.alertTimerId)
}