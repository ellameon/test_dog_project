import {runInAction} from "mobx";
import {timerStore} from "../../store/TimerStore";
import {intervalRequestService} from "./intervalRequestService";
import {clearIntervalRequestService} from "./clearIntervalRequestService";

export function autoRequestRestartService(): void {
  requestRestart()
}

function requestRestart(): void {
  runInAction(() => {
    clearIntervalRequestService(timerStore.intervalId)
    timerStore.intervalId = intervalRequestService()
  })
}