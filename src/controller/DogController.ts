import {deleteDogService} from "../service/deleteDogService";
import {addDogService} from "../service/addDogService";
import {openModalService} from "../service/openModalService";
import {closeModalService} from "../service/closeModalService";
import {changeIsCheckedService} from "../service/changeIsCheckedService";
import {deleteCheckedDogs} from "../service/deleteCheckedDogs";
import {openMassModalService} from "../service/openMassModalService";


export class DogController {

    static openMassModal() {
        openMassModalService()
    }
    static deleteDog(id: string,) {
        deleteDogService(id)
    }

    static DeleteSomeDogs() {
        deleteCheckedDogs()
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

    static changeIsChecked(id: string) {
        changeIsCheckedService(id)
    }
}