import {runInAction} from "mobx";
import {timerStore} from "../store/TimerStore";

export function autoRequestRestartService(): void {
  requestRestart()
}

function requestRestart(): void {
  runInAction(() => {
    timerStore.timerIsRun = false
    timerStore.timerIsRun = true
  })
}