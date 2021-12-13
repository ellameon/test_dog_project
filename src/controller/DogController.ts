import {getDogFromServerAndAddService} from "../service/getDogFromServerAndAddService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDogService} from "../service/toggleCheckedDogService";
import {openModalService} from "../service/openModalService";
import {deleteDogsService} from "../service/deleteDogsService";
import {toggleRequestService} from "../service/toggleRequestService";
import {dogRequestService} from "../service/dogRequestService";
import {autoRequestRestartService} from "../service/autoRequestRestartService";
import {setConfigService} from "../service/setConfigService";
import {authService} from "../service/authService";
import {setLoginService} from "../service/setLoginService";
import {setPasswordService} from "../service/setPasswordService";
import {logOutService} from "../service/logOutService";


export class DogController {

  static openModal(dogIds: Array<number>): void {
    openModalService(dogIds)
  }

  static getNewDog(): void {
    getDogFromServerAndAddService()
  }

  static closeModal(): void {
    closeModalService()
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
    setConfigService().then(r => {})
  }

  static getUser(): void {
    authService().then(r => {})
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
