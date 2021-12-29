import {observable} from "mobx";


export interface TimerStore {
  intervalId: number | undefined
  alertTimerId: number | undefined
}

export const timerStore = observable <TimerStore>( {
  intervalId: 0,
  alertTimerId: 0
})