import {runInAction} from "mobx";
import {timerStore} from "../../store/TimerStore";
import {intervalRequestService} from "./intervalRequestService";
import {clearIntervalRequestService} from "./clearIntervalRequestService";


export function dogRecordRequestService(): void {

  runInAction(() => {

    if (timerStore.intervalId === 0) {
      timerStore.intervalId = intervalRequestService()
    } else {
      clearIntervalRequestService(timerStore.intervalId)
    }
  })
}
