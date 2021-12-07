import {runInAction} from "mobx";
import {DogController} from "../controller/DogController";
import {timerStore} from "../store/TimerStore";


export function dogRequestService(timer: boolean): void {

  runInAction(() => {

    if (timer) {
     timerStore.intervalId = intervalRequest()
    } else {
      clearRequestInterval(timerStore.intervalId)
    }
  })

  function intervalRequest(): number {
    return window.setInterval(DogController.getNewDog, 30000);
  }

  function clearRequestInterval(intervalId: number): void {
    window.clearInterval(intervalId)
  }
}
