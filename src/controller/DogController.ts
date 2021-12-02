import {changeDogService} from "../service/changeDogService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDogService} from "../service/toggleCheckedDogService";
import {openModalService} from "../service/openModalService";
import {deleteDogsService} from "../service/deleteDogsService";


export class DogController {

    static openModal(dogIds: Array<number>) {
        openModalService(dogIds)
    }
    static changeDog() {
        changeDogService()
    }

    static closeModal() {
        closeModalService()
    }

    static changeIsChecked(id: number) {
        toggleCheckedDogService(id)
    }

    static deleteDogs() {
        deleteDogsService()
    }
}