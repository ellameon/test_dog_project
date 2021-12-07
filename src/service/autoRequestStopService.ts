import {timerStore} from "../store/TimerStore";
import {runInAction} from "mobx";


export function autoRequestStopService(): void {
  switchTimer()
}

function switchTimer():void {
  runInAction(() => {
      timerStore.timerIsRun = !timerStore.timerIsRun
    }
  )
}
