import {runInAction} from "mobx";
import {alertShowStore} from "../../store/AlertShowStore";
import {timerStore} from "../../store/TimerStore";


export function alertShowService(): void {
  runInAction(() => {
    alertShowStore.isAlertShown = false
    clearTimeout(timerStore.alertTimerId)
  })
}