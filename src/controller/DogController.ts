import {getDogFromServerAndAddService} from "../service/getDogFromServerAndAddService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDogService} from "../service/toggleCheckedDogService";
import {openModalService} from "../service/openModalService";
import {deleteDogsService} from "../service/deleteDogsService";
import {toggleRequestService} from "../service/toggleRequestService";
import {dogRequestService} from "../service/dogRequestService";
import {autoRequestRestartService} from "../service/autoRequestRestartService";
import {setUserService} from "../service/setUserService";
import {getUserService} from "../service/getUserService";
import {setLoginService} from "../service/setLoginService";
import {setPasswordService} from "../service/setPasswordService";


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

  static setUser(): void {
    setUserService()
  }

  static getUser(login: string, password: string): void {
    getUserService(login, password)
  }

  static setLogin(login: string): void {
    setLoginService(login)
  }
  static setPassword(password: string): void {
    setPasswordService(password)
  }
}
