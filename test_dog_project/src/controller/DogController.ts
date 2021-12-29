import {getDogFromServerService} from "../service/dogoperationservice/getDogFromServerService";
import {closeModalService} from "../service/modalservice/closeModalService";
import {toggleCheckedDogService} from "../service/dogoperationservice/toggleCheckedDogService";
import {openModalService} from "../service/modalservice/openModalService";
import {deleteDogsService} from "../service/dogoperationservice/deleteDogsService";
import {toggleRequestService} from "../service/requestservice/toggleRequestService";
import {dogRequestService} from "../service/requestservice/dogRequestService";
import {autoRequestRestartService} from "../service/requestservice/autoRequestRestartService";
import {configService} from "../service/configservise/configService";
import {setLoginService} from "../service/authservice/setLoginService";
import {setPasswordService} from "../service/authservice/setPasswordService";
import {logOutService} from "../service/authservice/logOutService";
import {authService} from "../service/authservice/authService";
import {getWebSocketService} from "../service/websocketservice/getWebSocketService";
import {alertTimerSetService} from "../service/alertservice/alertTimerSetService";
import {setFromDateService} from "../service/dateservice/setFromDateService";
import {setToDateService} from "../service/dateservice/setToDateService";
import {fillJournalStoreFromDataBaseService} from "../service/databaseservice/fillJournalStoreFromDataBaseService";
import {setIdToFindService} from "../service/databaseservice/setIdToFindService";


export class DogController {

  static openModal(dogIds: Array<number>): void {
    openModalService(dogIds)
  }

  static webSocketOpen(): WebSocket{
    return getWebSocketService() as WebSocket;
  }

  static getNewDog(): void {
    getDogFromServerService().then()
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

  static setFromDate(fromDate: Date): void {
    setFromDateService(fromDate)
  }

  static setToDate(toDate: Date): void {
    setToDateService(toDate)
  }

  static fillJournalStoreFromDataBase(): void {
    fillJournalStoreFromDataBaseService()
  }

  static setIdToFind(findId: number): void {
    setIdToFindService(findId)
  }
}
