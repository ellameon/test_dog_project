import {deleteDogService} from "../service/deleteDogService";
import {addDogService} from "../service/addDogService";
import {openModalService} from "../service/openModalService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDog} from "../service/changeIsCheckedService";
import {openMassModalService} from "../service/openMassModalService";
import {confirmedDeleteDogService} from "../service/confirmedDeleteDogService";


export class DogController {

    static openMassModal() {
        openMassModalService()
    }
    static deleteDog(id: number ) {
        deleteDogService([id])
    }

    static addDog() {
        addDogService()
    }

    static openModal(onDeleteDog: () => void, deleteMessage: string) {
        openModalService(onDeleteDog, deleteMessage)
    }

    static closeModal() {
        closeModalService()
    }

    static changeIsChecked(id: number) {
        toggleCheckedDog(id)
    }

    static confirmedDeleteDog() {
        confirmedDeleteDogService()
    }
}