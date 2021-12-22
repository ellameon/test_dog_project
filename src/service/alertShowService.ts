import {runInAction} from "mobx";
import {alertShowStore} from "../store/AlertShowStore";
import {timerStore} from "../store/TimerStore";
import {alertTimerSetService} from "./alertTimerSetService";

export function alertShowService(): void {
  runInAction(() => {
    alertShowStore.isAlertShown = false
    timerStore.alertTimerId = alertTimerSetService()
  })
}