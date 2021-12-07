import {timerStore} from "../store/TimerStore";
import {runInAction} from "mobx";


export function timerToggleService(): void {
  switchTimer()
  console.log(timerStore.timerIsRun)
}

function switchTimer() {
  runInAction(() => {
    timerStore.timerIsRun = !timerStore.timerIsRun
    }
  )
}


console.log(timerStore.timerIsRun)
