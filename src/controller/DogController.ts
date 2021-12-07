import {getDogFromServerAndAddService} from "../service/getDogFromServerAndAddService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDogService} from "../service/toggleCheckedDogService";
import {openModalService} from "../service/openModalService";
import {deleteDogsService} from "../service/deleteDogsService";
import {timerToggleService} from "../service/timerToggleService";
import {dogRequestService} from "../service/dogRequestService";


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

  static timerToggle(): void {
    timerToggleService()
  }

  static dogRequest(timer: boolean): void {
    dogRequestService(timer)
  }
}