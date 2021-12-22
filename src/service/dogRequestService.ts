import {runInAction} from "mobx";
import {timerStore} from "../store/TimerStore";
import {intervalRequestService} from "./intervalRequestService";
import {clearIntervalRequestService} from "./clearIntervalRequestService";


export function dogRequestService(): void {

  runInAction(() => {

    if (timerStore.intervalId === 0) {
      timerStore.intervalId = intervalRequestService()
      intervalRequestService()
    } else {
      clearIntervalRequestService(timerStore.intervalId)
    }
  })
}
