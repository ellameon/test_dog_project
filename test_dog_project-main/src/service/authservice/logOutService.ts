import {userStore} from "../../store/UserStore";
import {runInAction} from "mobx";
import {clearAlertTimeoutService} from "../alertservice/clearAlertTimeoutService";
import {timerStore} from "../../store/TimerStore";
import {clearIntervalRequestService} from "../requestservice/clearIntervalRequestService";
import {DogController} from "../../controller/DogController";
import {closeWebSocketService} from "../websocketservice/closeWebSocketService";
import {dogsStore} from "../../store/DogStore";
import {checkedDogsStore} from "../../store/CheckedDogsStore";
import {modalStore} from "../../store/ModalStore";

export function logOutService(): void {

  const webSocket = DogController.webSocketOpen()

  runInAction(() => {
    userStore.login = ''
    userStore.password = ''
    dogsStore.dogs.length = 0
    dogsStore.lastDogId = 0
    checkedDogsStore.checkedDogs.length = 0
    modalStore.dogIdsToDelete.length = 0
    modalStore.activeIndex = 0


    closeWebSocketService(webSocket)
    clearAlertTimeoutService(timerStore.alertTimerId)
    clearIntervalRequestService(timerStore.intervalId)
  })
}