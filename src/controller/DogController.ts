import {getDogFromServerAndAddService} from "../service/getDogFromServerAndAddService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDogService} from "../service/toggleCheckedDogService";
import {openModalService} from "../service/openModalService";
import {deleteDogsService} from "../service/deleteDogsService";
import {toggleRequestService} from "../service/toggleRequestService";
import {dogRequestService} from "../service/dogRequestService";
import {autoRequestRestartService} from "../service/autoRequestRestartService";
import {configService} from "../service/configService";
import {setLoginService} from "../service/setLoginService";
import {setPasswordService} from "../service/setPasswordService";
import {logOutService} from "../service/logOutService";
import {authService} from "../service/authService";
import {getWebSocketService} from "../service/getWebSocketService";
import {alertTimerSetService} from "../service/alertTimerSetService";


export class DogController {

  static openModal(dogIds: Array<number>): void {
    openModalService(dogIds)
  }

  static webSocketOpen(): WebSocket{
    return getWebSocketService() as WebSocket;
  }

  static getNewDog(): void {
    getDogFromServerAndAddService().then()
  }

  static closeModal(): void {
    closeModalService()
  }

  static alertShow(): void {
    alertTimerSetService()
  }

  static changeIsChecked(id: number): void {
    toggleCheckedDogService(id)
  }

  static deleteDogs(): void {
    deleteDogsService()
  }

  static toggleAutoRequest(): void {
    toggleRequestService()
  }

  static dogRequest(): void {
    dogRequestService()
  }

  static autoRequestRestart(): void {
    autoRequestRestartService()
  }

  static setConfig(): void {
    configService().then()
  }

  static auth(): void {
    authService()
  }

  static setLogin(login: string): void {
    setLoginService(login)
  }

  static setPassword(password: string): void {
    setPasswordService(password)
  }

  static logOut(): void {
    logOutService()
  }
}
