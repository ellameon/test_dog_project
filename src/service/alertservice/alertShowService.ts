import {runInAction} from "mobx";
import {alertShowStore} from "../../store/AlertShowStore";
import {timerStore} from "../../store/TimerStore";
import {dogRequestOrderStore} from "../../store/DogRecordRequestOrderStore";


export function alertShowService(): void {
  runInAction(() => {
    alertShowStore.isAlertShown = false
    clearTimeout(timerStore.alertTimerId)
    dogRequestOrderStore.isFilled = false
    console.log(timerStore.alertTimerId)
  })
}