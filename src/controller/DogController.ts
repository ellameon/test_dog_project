import {changeDogService} from "../service/changeDogService";
import {openModalService} from "../service/openModalService";
import {closeModalService} from "../service/closeModalService";
import {toggleCheckedDogService} from "../service/toggleCheckedDogService";
import {openMultiModalService} from "../service/openMultiModalService";
import {deleteDogsService} from "../service/deleteDogsService";


export class DogController {

    static openMultiModal() {
        openMultiModalService()
    }
    static changeDog() {
        changeDogService()
    }

    static openModal(dogId: number, dogUrl: string) {
        openModalService([dogId], dogUrl)
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