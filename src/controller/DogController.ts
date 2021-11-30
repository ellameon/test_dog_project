import {addDogService} from "../service/addDogService";
import {openModalService} from "../service/openModalService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDogService} from "../service/changeIsCheckedService";
import {openMassModalService} from "../service/openMassModalService";
import {confirmedDeleteDogService} from "../service/confirmedDeleteDogService";


export class DogController {

    static openMassModal() {
        openMassModalService()
    }
    static addDog() {
        addDogService()
    }

    static openModal(dogId: number, deleteMessage: string) {
        openModalService([dogId], deleteMessage)
    }

    static closeModal() {
        closeModalService()
    }

    static changeIsChecked(id: number) {
        toggleCheckedDogService(id)
    }

    static confirmedDeleteDog() {
        confirmedDeleteDogService()
    }
}