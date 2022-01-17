import {alertShowService} from "./alertShowService";
import {runInAction} from "mobx";
import {timerStore} from "../../store/TimerStore";


export function alertTimerSetService(): void{
  runInAction(() => {
    timerStore.alertTimerId = window.setTimeout(alertShowService, 5000)
  })
}