import {timerStore} from "../store/TimerStore";
import {runInAction} from "mobx";
import {intervalRequestService} from "./intervalRequestService";
import {clearIntervalRequestService} from "./clearIntervalRequestService";


export function toggleRequestService(): void {
  runInAction(() => {
      if (timerStore.intervalId === 0 ) {
        timerStore.intervalId = intervalRequestService()
      } else {
        clearIntervalRequestService(timerStore.intervalId)
        timerStore.intervalId = 0
      }
    }
  )
}
