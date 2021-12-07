import {observable} from "mobx";

export interface TimerStore {
  timerIsRun: boolean
  intervalId: number
}

export const timerStore = observable <TimerStore>( {
  timerIsRun: true,
  intervalId: 0
})