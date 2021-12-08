import {observable} from "mobx";

export interface TimerStore {
  intervalId: number | undefined
}

export const timerStore = observable <TimerStore>( {
  intervalId: 0
})